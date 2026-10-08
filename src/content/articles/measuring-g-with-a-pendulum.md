---
title: "Measuring Gravity With String and a Stopwatch"
subtitle: "How close can a classroom pendulum get to 9.81?"
authors: [jordan-sample]
editors: [dylan, charles]
section: physics-and-astronomy
issue: issue-1
publishDate: 2027-01-22
abstract: "A pendulum's period depends only on its length and the local strength of gravity. We tried to recover g from ten lengths of string and found that the hard part was not the physics but the stopwatch."
coverImage: ../../images/covers/measuring-g-with-a-pendulum.svg
coverCredit: "Illustration: The Berkeley Carroll Science Journal"
tags: [sample, research, mechanics]
sources:
  - label: "Wikipedia: Pendulum"
    url: "https://en.wikipedia.org/wiki/Pendulum"
  - label: "Wikipedia: Gravity of Earth"
    url: "https://en.wikipedia.org/wiki/Gravity_of_Earth"
  - label: "HyperPhysics: Simple pendulum"
    url: "http://hyperphysics.phy-astr.gsu.edu/hbase/pend.html"
---

*Sample article for site testing; replace before launch.*

For small swings, a simple pendulum's period depends on exactly two things: its length and the local acceleration due to gravity. The formula is short enough to memorize, and it can be turned around. Measure the period, measure the length, and gravity falls out. This project asked how well that actually works with the equipment in a high school physics room, and where the error comes from.

## Method

The pendulum was a steel nut on a length of fishing line, hung from a clamp on a lab stand. We used ten lengths from 20 centimeters to 1.5 meters, measured from the pivot to the center of the nut with a meter stick. For each length we pulled the nut back about 10 degrees, released it, and timed twenty full swings with a phone stopwatch, then divided by twenty to get the period. We repeated each length three times.

Squaring the period formula gives a straight line: the square of the period equals a constant times the length, and that constant contains g. So instead of computing g ten separate times, we plotted period squared against length and took the slope. The slope of that line, multiplied by four pi squared, is g. Fitting a line to all ten points uses every measurement at once and makes an outlier easy to spot.

## Result

Our fit gave a value of 9.7 meters per second squared, with a spread from the three repeats of about plus or minus 0.2. The accepted value in New York is about 9.80. So we were within about one percent, and the accepted value sat inside our uncertainty.

- The line through our ten points was extremely straight, which confirmed the period-squared-against-length relationship better than any single measurement could.
- The two shortest lengths were the noisiest. A 20-centimeter pendulum swings in under a second, and a thumb on a phone screen cannot start and stop on that.
- The intercept of the line was not quite zero, which we believe reflects a consistent error in where we measured the length: probably the pivot point was a few millimeters below the clamp edge we measured from.

> The physics took ten minutes to explain. The timing took three afternoons to get right.

## Where the error came from

We expected the biggest error to be the small-angle approximation, since the formula only holds exactly for tiny swings. At 10 degrees the correction is about 0.2 percent, which is smaller than anything else in our setup. The real error was human reaction time. Starting and stopping a stopwatch introduces roughly a tenth of a second of uncertainty, and timing twenty swings instead of one divides that by twenty, which is why we did it. Timing fifty swings would have helped more, but the pendulum's amplitude decayed noticeably by then, and we did not want to change the swing angle mid-measurement.

We also did not account for the mass of the string or the fact that the nut is not a point. Both effects are small at our lengths and both push the result slightly, and we have not worked out which direction they net to. A photogate timer, which many physics labs have, would remove the reaction-time problem entirely and is the obvious next step.

The result is unremarkable, which was the point. A formula from the 1600s, a nut, and a phone got within one percent of a number that satellites measure to many decimal places. The gap between one percent and those decimal places is the whole history of precision measurement.

## The formula's limits

We used the simple pendulum formula, which treats the bob as a point on a massless string. It is worth knowing when that stops being true. If the bob is large compared to the string, or the string is heavy, the pendulum is a "physical" pendulum and the period depends on how the mass is distributed, not just the distance to the center. At our lengths the correction is well under one percent, smaller than our timing error, which is why we ignored it. Push the string much shorter than 20 centimeters and that stops being true. Push the swing much wider than 15 degrees and the small-angle approximation stops being true too. Knowing which approximation breaks first, and at what point, is the part of the project that felt most like real physics.

