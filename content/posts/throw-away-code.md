+++
author = "Tim Roberts"
categories = []
description = "We spend our time focusing on how we can build code that will last forever. I think we should learn to throw it all away."
linktitle = ""
featured = ""
featuredpath = "img/throw-away.gif"
featuredalt = "Swanson throwing a computer away"
type = "post"
title = "Throw Away Code"
date = 2020-02-09T14:32:02-05:00
draft = false
+++

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
I believe, centered around the emotions that started the Agile
movement. Put another way, the Agile movement, _whatever_ you want
to call it, is a reaction to the fact that we cannot forsee the future 
but still need a way to plan in it.

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
Netwon. Do we really think we understand our requirements better than
_**fucking Newton**_ understood gravity? I am not going to go on record
saying that. 

Instead of trying to protect ourselves for being wrong, I believe that
we should _embrace_ it. _Embrace_ that we will be wrong no matter how
_right_ we are today. _Embrace_ that we will, one day sooner than
later, realize how _silly_ our understanding was. 

But what would this look like, in action? How could we ever build
_anything_ of importance if we could keep going back, throwing away
what we had done before, just because the grass is greener looking
back? How can we build a foundation if we constantly keep going back
and replacing its material or shape?

The same way we can change the shape or color of a Lego piece without
the structure that it is supporting being disturbed. The same way that
we can cut our hair off our head but still be the people that we are
and react to and act in the world the same way we did before. Just
because something _looks_ different doesn't mean _it is_ different.
What do I mean?

It makes no difference to our computer if we talk to it in FORTRAN,
C, or ClojureScript. It will follow our instructions exactly and do
exactly what we told it to do. Furthermore, it doesn't matter _how_
we told it to accomplish the goal, if the instructions are correct,
it will accomplish the goal. For instance, if I wanted to tell
my computer what `multiply` meant, I could say both of these

```javascript
const multiply = (x, y) => x * Y
```

or 

```javascript
const multiply (x, y) => {
  let total = 0
  for (let i = 0; i < y; i++) {
    total += x
  }

  return total
}
```

They would both give me `4` when I fed in `2, 2` or give me
`10` when I gave them `5, 2`, even though that I have told the
computer to do _different_ things. 