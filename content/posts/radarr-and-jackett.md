+++
author = "Tim Roberts"
categories = ["downloading","home automation", "radarr", "jackett", "docker"]
description = "Today we learn how to set up Jackett and Radarr so that we can automate the downloading of our content."
linktitle = ""
featured = ""
featuredpath = "img/Jackett_cover.png"
featuredalt = "Jacket + Radarr = Match made in heaven"
type = "post"
title = "Radarr and Jackett: Get Your Automation On"
date = 2020-02-16T11:57:54-05:00
draft = false
+++

As I have started to take more seriously my attention and what I
consume, I have had this internal urge to start owning all of the
content that I consume. Even if I had to ask the outside world for
the information _once_, I wanted to be able to ask _my_ network
for the information from that point forward. Case in point:
_**movies**_.

When my partner and I want to watch a TV or movie, I want us to
be able to do that even if the outside network isn't working. We
shouldn't have to have a constant network connection in order to
have the comforts that Netflix or Hulu offer. I knew that we would
still have to be connected _at some point_ in order to get the
content but once we _had_ it, we should, in my eyes, be able to
consume it _however_ and _whenever_ we want.

I had previous experience with this, using [JDownloader](https://jdownloader.org/), RG, and some warez-y website. That process, which
I will document at some point, is simple enough that my parents,
admittedly tech-forward people, have _terabytes_ of files saved
on a handful of external hard drives that we share with 16gb
flash drives when they realize one of us kids haven't seen a movie
that they deem "essential" to watch.

However, that process meant that I had to manually go to my favorite
site, search for the movies that I want, at the right format, just
so that I could figure out captchas or pay $/mo for the privilege to
automate it more with JDownloader. It was the year 2020 and I knew that
there had to be a better way.

Being the tech person I am, I first tried to write it myself. I wrote
some RSS servers, using [OpenVPN and Transmission](/posts/setting-up-a-plex-box-with-docker/) to download the files I wanted.
That was fun and I learned a lot about how the process would work.
But. Having to go to KAT or TPB to find the files we needed, getting
the magnet link, then going to Transmissions client and setting the
download path and .... simply did not pass the Wife Test. We needed
a better way.

I did some digging and found this tool called [Radarr](https://github.com/Radarr/Radarr). It says the words

> A fork of Sonarr to work with movies à la Couchpotato

if that means anything to you.

What sold me were the [features](https://radarr.video/#features) that
they had: An integration with my Transmission client and the ability
to search for the files that I wanted to fetch. It also has a _bunch_
of other features that are killer but since we don't need most of them
yet, we aren't going to go over it.

Looking at the site and docs, I thought that I just had to click a few
buttons and _bang_ it would work. Since I am using Docker, it was a
little bit more involved.

```shell
#!/bin/bash

# Create a container
docker create \
  # call it radarr
  --name=radarr \
  # give it super root admin hero level perms
  # probably a bad idea tbh
  -e PUID=0 \
  -e PGID=0 \
  # Whatever your timezone is
  -e TZ=Europe/London \
  -e UMASK_SET=022 `#optional` \
  # <host>:<docker>
  -p 7878:7878 \
  # So we can keep config between restarts
  -v ~/.radarr:/config \
  # point our data folder to the ts_data folder
  # I doubt this is needed since we don't download
  # inside of it
  -v $PWD/data:/ts_data \
  -v ~/radarr/downloadclient-downloads:/downloads \
  --restart unless-stopped \
  linuxserver/radarr

# Start radarr container
docker start radarr
```

You can then run 

```shell
docker logs -f radarr
```

and wait until it says that it is listening on `7878`. Once it does,
you can press `ctrl+d` to get out of the logs and go in the browser
to `<ip_of_server>:7878`. 

> If you mapped the ports to different on your host, you will have
> to change it above

At this point, we can connect our `Download Client` inside of `radarr`

![Download Client](/img/download_client.png)

![OpenVPN Client Config](/img/transmission-client-config.png)

> Be sure to have directory be wherever you want the
> files to be downloaded _**in relation to Transmission**_. This
> means that if you are downloading files to /data/completed/type
> you will need to set Directory to /data/completed/type

You would think that this is all you need to do. And I did for a bit.
This will not start downloading movies as you add and search them
because you haven't configured any `Indexers`. That is where
`jackett` comes into play.

```shell
#!/bin/bash

docker create \
  --name=jackett \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ=Europe/London \
  -p 9117:9117 \
  -v ~/.jackett:/config \
  -v /dev/null:/downloads \
  --restart unless-stopped \
  linuxserver/jackett

docker start jackett
```

This will start `jackett` on the `host port` specified in the script.
Once it starts (_use docker logs -f jackett to see when it starts_),
you can go to `<ip>:<port>` and then click `Add indexer`

The file indexers that I like are RARBG and YTS. Add them and then
follow the instructions for adding a Jackett indexer to Radarr.

If you are using those file indexers, your Jackett config should look
something like this

![Jackett Config](/img/jackett_config.png)

And your Radarr config should look similar to this

![Radarr Index Config](/img/indexers_config.png)

And each Indexer should look similar to

![RARBG Config](/img/rarbg_config.png)

Your specific settings will be different _and that is okay_. These are
what it will _look_ like, not what it will be.

Now, when you are in `radarr` and `add and search` for files, it will
use the `indexers` that you added to find the files. Once it finds a
file that matches, it will tell the `OPenVPN` download client to
download the requested files into the `Directory` entered on setup.

When it is all said and done, when I check what I am running on my
server, I see the following

![When I run Docker PS](/img/docker_ps.png)

Your IDs, created and status values will be different but in order
to get the same setup that I currently have, you will need the pieces
set up as I do above.