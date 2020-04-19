---
author: "Tim Roberts"
categories: ["docker", "programming", "home lab", "home server", "plex"]
description: "I want to own my data. Downloading instead of streaming is a start. This is how I set up a Plex server using NordVPN, Transmission, and Docker"
linktitle: "Setting Up a Plex Media Server with Docker, OpenVPN, and Transmission"
featured: ""
featuredpath: "img/plex-logo.png"
featuredalt: "Plex Media Server"
type: "post"
title: "Setting Up a Plex Media Server with Docker, OpenVPN, and Transmission with RSS Feeds"
date: "2020-01-25T19:13:18-05:00"
draft: false 
slug: setting-up-a-plex-box-with-docker
---


The first thing we want to do is make sure that we have `docker` installed on the host machine you want
to be running these services.

```bash
docker --version
```

If you do not get a version number, be sure to install docker.

Next, we need to start the transmission server but only run the torrent server when it is connected
to OpenVPN, using the NordVPN service.

All of that sounds hard but _thankfully_ someone has created a Docker image that does _just that_!

You can get it going with the following bash command

```sh
#!/bin/bash

# https://github.com/haugene/docker-transmission-openvpn

docker run --cap-add=NET_ADMIN -d \
              -v $PWD/data:/data \
              -v /etc/localtime:/etc/localtime:ro \
              -e CREATE_TUN_DEVICE=true \
              -e OPENVPN_PROVIDER=NordVPN \
              -e OPENVPN_USERNAME=my_username \
              -e OPENVPN_PASSWORD=my_password \
              -e LOCAL_NETWORK=192.168.0.0/16 \
              --log-driver json-file \
              --log-opt max-size=10m \
              -p 9091:9091 \
              haugene/transmission-openvpn
```

I like to keep these as `.sh` files and I would put that as `start_open_vpn_transmission.sh` and
give it the ability to be ran

```sh
chmod +x start_open_vpn_transmission.sh
```

and then run it

```sh
./start_open_vpn+transmission.sh
```

Now we can go to `<IP OF SERVER>:9091`, we should see the Transmission WebUI

Once that is working, we need to start the service that will download the files based on RSS feeds.
We will be using yts and showrss for that along with `transmission-rss`. Once again, there's
a Docker image for that!

```sh
#!/bin/bash
# https://github.com/nning/transmission-rss

docker run -d \
      -v $(pwd)/transmission-rss.conf:/etc/transmission-rss.conf \
      --link dc5add3e0a1d:transmission \
      --name "transmission-rss" \
      haugene/transmission-rss

```

and since that references some `.conf` file, let's create that as well

```yaml
feeds:
    - url: http://showrss.info/user/_SHOWRSSID_.rss?magnets=true&namespaces=true&name=null&quality=null&re=null
    - url: http://yts.ws/rss
      regexp: 1080p # only download movies in 1080p
```

To test if this worked, you should be able to go to the Transmission WebUI and see that it has
more videos to download, based on the results of the RSS feeds.

Finally, we need to start the Plex server. IN DOCKER of course.

```sh
#!/bin/bash
mkdir ~/plex

docker run \
-d \
--name plex \
--restart always \
-p 32400:32400/tcp \
-p 3005:3005/tcp \
-p 8324:8324/tcp \
-p 32469:32469/tcp \
-p 1900:1900/udp \
-p 32410:32410/udp \
-p 32412:32412/udp \
-p 32413:32413/udp \
-p 32414:32414/udp \
-e TZ="Europe/London" \
-e PLEX_CLAIM="claim-MY_CLAIM" \
-e ADVERTISE_IP="http:/MY_IP:32400/" \
-h MY_IP \
-v ~/plex/config:/config \
-v ~/plex/transcode:/transcode \
-v $PWD/data:/data \
plexinc/pms-docker
```
