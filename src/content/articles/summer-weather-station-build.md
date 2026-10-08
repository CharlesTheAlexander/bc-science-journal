---
title: "Six Weeks Building a Weather Station"
subtitle: "What a summer engineering program was actually like, and what I would tell a sophomore"
authors: [quinn-sample]
editors: [henry, ellie]
section: innovation
issue: issue-1
publishDate: 2027-01-22
abstract: "I spent last summer in a university engineering program building a solar-powered weather station from a microcontroller and a handful of sensors. Here is what the program involved, what broke, and how to decide whether one is for you."
coverImage: ../../images/covers/summer-weather-station-build.svg
coverCredit: "Illustration: The Berkeley Carroll Science Journal"
tags: [sample, summer programs, engineering, electronics]
sources:
  - label: "Arduino documentation"
    url: "https://docs.arduino.cc/"
  - label: "Wikipedia: Automatic weather station"
    url: "https://en.wikipedia.org/wiki/Automatic_weather_station"
  - label: "Bosch BME280 sensor datasheet"
    url: "https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/"
---

*Sample article for site testing; replace before launch.*

The brochure for the program I attended said "students will design and build a working engineering project." That turned out to be accurate, and also to leave out the part where the project does not work for four of the six weeks. This is a plain account of the program: what a day looked like, what I built, what went wrong, and who should apply.

## The shape of the program

Six weeks, Monday through Friday, on a university campus, in a lab with about twenty high school students and three graduate student instructors. Mornings were short lectures: circuits, then microcontrollers, then sensors, then power. Afternoons were open lab time on your own project, with instructors circulating. There was no grade. There was a final presentation to parents and faculty, which turned out to be a better motivator than a grade.

Cost is the thing brochures bury. Programs like this range from free, with competitive admission, to expensive residential programs. Ask the college office; some have need-based aid that is not advertised.

## What I built

A weather station: temperature, humidity, air pressure, and light, logged every minute to a memory card and posted to a small web page over Wi-Fi. The brain was a microcontroller board with built-in Wi-Fi. The environmental sensor was a single chip that measures temperature, humidity, and pressure and talks to the microcontroller over two wires. Power was a small solar panel charging a lithium battery through a charging board.

The parts list was about fifty dollars. The instructors were clear that the point was not the parts. It was learning to read a datasheet, wire something from a diagram, and find out why it does not work.

- Week one: blink an LED, read a button. This felt beneath me and turned out to be the week I learned the most, because everything later was this plus one more thing.
- Week two: get the sensor to report a temperature. It reported minus 140 degrees for two days. The wires were swapped.
- Week three: log to the memory card. Files kept corrupting when the board lost power mid-write; the fix was to close the file after every line.
- Week four: Wi-Fi and the web page. This was the fun week.
- Weeks five and six: solar power, weatherproofing, and finding out that a plastic food container in direct sun makes a very bad thermometer housing.

> The wires were swapped. That sentence explains about a third of all engineering.

## What I would tell a sophomore

Apply if you like the feeling of something not working and wanting to know why. Do not apply for the line on an application; six weeks is a long time to fake interest, and the instructors can tell. You do not need to know how to code beforehand. You do need to be willing to ask for help early, because the students who struggled were the ones who spent three days stuck rather than three minutes asking.

The station is still running on my fire escape. The temperature readings are still a few degrees high in the afternoon because of the housing. Fixing that is the project for this summer.

## How to find a program

Start with the college counseling office in the fall; application deadlines for summer programs cluster in January and February. Look for programs run by a university department rather than a company renting a university's name, since the instructors are more likely to be actual graduate students in the field. Read the daily schedule if one is published. A program that is mostly lectures will feel like school. A program that gives you a bench and a problem will feel like the thing you are trying to find out whether you like. And ask alumni of the program directly; the school's alumni office can usually connect you, and people who spent a summer building something are happy to talk about it.

If cost or admission rules out a formal program, the project itself does not require one. Everything I built is documented online, the parts cost less than a textbook, and the instructors' main contribution was being in the room when the wires were wrong. A teacher who will let you use a corner of the lab after school is most of the way to the same experience.

