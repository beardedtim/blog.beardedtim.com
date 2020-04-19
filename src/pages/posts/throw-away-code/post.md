---
author: "Tim Roberts"
categories: []
description: "We spend our time focusing on how we can build code that will last forever. I think we should learn to throw it all away."
linktitle: ""
featured: ""
featuredpath: "img/throw-away.gif"
featuredalt: "Swanson throwing a computer away"
type: "post"
title: "Throw Away Code"
date: "2020-02-09T14:32:02-05:00"
draft: false
slug: throw-away-code
---

No one _**wants**_ to write bad code. There's no programmer out there 
that is _**trying**_ to miscommunicate with their computer. In fact,
I'd say that for the majority of us, we get an _immense_ sense of
pride, accomplishment, and dare I say _self-meaning_ from the code
that we write. _**Of course**_ we'd want what we write to stand
the test of time, to live on like the bank mainframes of our
grandfathers. Why wouldn't we? 

I don't want this essay to leave the impression, before I give myself
a chance to miscommunicate and express it, that I want someone to
write _bad_ code or code that _breaks_, however _**you**_ want to
define that. I don't believe that nor would I want my team to try
that. Instead I want us to build the _best_ code, however that may
be defined at the time.

It is the _**at the time**_ part that I want to focus on. Because no
one has a way of looking into a crystal ball and seeing what will
happen in the future, all we can do is gather information _now_ and
make guesses about what will happen _later_. This realization is,
I believe, centred around the emotions that started the Agile
movement. Put another way, the Agile movement, _whatever_ you want
to call it, is a reaction to the fact that we cannot foresee the 
future but still need a way to plan in it.

The Agile movement had some proponents that created this idea of
_**eXtreme Programming**_, or _**XP**_. It tells us that trying to 
plan for the future or to code for reusability are a fools errand. It 
tasks the programmer with meeting the change in requirements head-on,
with gusto and courage, to totally embrace the fact that we cannot 
tell what will happen in the future. 

Even before _XP_, there was a school of thought, expressed by
Fred Brooks in _**The Mythical Man-Month**_, that we should just
plan on _throwing one away_ because we have no idea what we
actually need to build until we build it.

> In most projects, the first system built is barely usable....Hence
> plan to throw one away; you will, anyhow. 
>
> Fred Brooks | The Mythical Man-Month

I want to take Brooks' idea and push it one step further in saying

> Plan to throw every program you write away

Brooks thought that _eventually_ we would know the requirements to
the system we need to build, just like XP thought that we could write
enough tests and acceptance criteria to know that we built what
we actually needed. In my experience, and in the experience of most
of my past teammates, _this is not true_.

Never do we get to take a step back and say "This is what the client
asked for." There is _always_ a misunderstanding, a _change in 
understanding_. 

Sometimes this change is _internal_. We are told that the user actually
wanted the font to be **bold** not _italic_. Other times, this change
is _external_. A new language comes out, a new paradigm is invented,
faster and more robust computers are built. 

When my grandfather worked for IBM, he _could not fathom a gigabyte_.
He could not comprehend holding that munch information on a 
_reel to reel_ cassette tape. However, once we invented hard drives
and flash storage, _of course_ we would have gigabytes, even terabytes
or petabytes. 

Eventually, some way or how, what you _think_ is true will be proven
to be wrong. Hell, even Newton was _kinda_ wrong about gravity. Fucking
Newton. Do we really think we understand our requirements better than
_**fucking Newton**_ understood gravity? I am not going to go on record
saying that. 

Instead of trying to protect ourselves for being wrong, I believe that
we should _embrace_ it. _Embrace_ that we will be wrong no matter how
_right_ we are today. _Embrace_ that we will, one day sooner than
later, realize how _silly_ our understanding was. 

The larger point I am trying to get at here is that there is no
such thing as _correct_ in software. There is no such thing as _done_.
All we have are half-baked attempts, usually done by someone that has
long since left the company (_with only 18mo avg tenure, it's not 
hard to be the last one holding the potato_), that _at the time_ were
thought of as _correct_ or at least _good enough_.

Most of our pain and misery in software development comes from when we
learn that we are wrong but are unable to change, such as when you are
given a "legacy" codebase and are told that it needs new requirements
or that the old ones have bugs in them. If that code is not amenable to
change, if you cannot easily and quickly iterate on that codebase, I
at least get filled with dread, imposter syndrome, negative emotions
and thoughts _because of my investment in my skills_. 

I propose that _everything_ we write be able to be thrown away at times
like this. When the next engineer comes along and the new management
says that they need to fix some bugs or add features, I want them to
be able to start fresh, without any of the baggage that my
misunderstanding might have caused. I don't want them to have to
decrypt what _I_ thought was truth when they think something different.
I don't want them to have to spend hours if not days pouring over my
code and notes _just_ to make a change. 

We should, instead, _just start fresh_. The problems that we are
solving _are not that hard_. We are putting buttons on a screen,
we are munging some data from 1 or more data points, we are authorizing
a request. _None_ of these things are rare, hard, or complex
_by themselves_. Everything that we get paid to do, by and large, is
already a solved problem. Someone on StackOverflow or some random
tech blog _has already solved this problem_. Sure, they didn't solve
it with K8s running on a cluster of Pis or with WizBangBoom running
Widget OS on something yet to be created. But _that's not_ the problem
that we are getting paid to solve. We are getting paid to fix a
problem that our customers are facing. 

The entire software industry is centred around solving problems
for _humans_ but most of our job is spent solving problems _caused_
by humans: CI is broken, Typescript is failing, we need to upgrade
our dependencies. _None_ of that shit matters to the user that just
wants to be able to get their emails on their tablet. We need to
stop and think on how we can get rid of all the shit that _isn't_
directly helping us build features for those users.

Maybe we go back to PHP and Monolithic applications. Maybe we stop
trying to ship 5mb of data to our users just so they can fill out
a contact form. Maybe we stop using the web all together. I don't
pretend to know. I do, however, know that how we build software today
is not going to work _tomorrow_. We need new ways of thinking, new
paradigms for building, new ways of working together to _build shit_.

Regardless of _how_ we get there, I believe that _there_ looks like
building software with Lego blocks, each one a small step away from
being replaced with another one. Each small program we write will be
able to be replaced at a whim, because that's what the "market" wants.

Throw your code away, stop putting shit onto shit, get a _complete_
understanding of the problem space. Anything less than that and you are
just passing the potato to the next shmuck that gets in your shoes,
probably 18mos from now.