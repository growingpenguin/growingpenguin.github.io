---
layout: post
title:  "RTL-SDR"
---

# RTL-SDR
## What is RTL-SDR?
RTL-SDR is essentially a very affordable way to get started with radio scanning and software-defined radio (SDR) without needing a lot of specialized equipment <br/>
RTL-SDR: A small USB device that you plug into your computer <br/>
-Originally designed to receive digital television broadcasts on computers <br/>
-Some clever people figured out that with the right software, these devices can be used to pick up a wide range of radio frequencies <br/>
### What Can It Do?
-Can receive live radio signals from different sources like commercial FM, amateur radio bands, air traffic control, and even satellites <br/>
-Works with a computer and special software to let you tune into different frequencies <br/>
-Can think of it like a radio that you can tune to any station, but instead of just music, you can hear all sorts of communications <br/>
### It’s Receive-Only
The RTL-SDR can only receive signals; it cannot send out any signals (it's not a transmitter) <br/>
### Why Is It Special?
-Extremely cheap compared to other radio equipment that can do similar things <br/>
-There’s a big community of people who use RTL-SDR, so there’s lots of free software and advice available <br/>
-Before devices like RTL-SDR, you'd have to spend a lot of money to get into radio scanning or SDR <br/>
### Uses
Hobbyists use it to explore the airwaves around them, listening to anything from marine and aircraft communications to weather satellites <br/>
It's a learning tool for those interested in radio technology or pursuing a hobby in amateur radio <br/>
### Getting Started
To begin, you’ll need the RTL-SDR dongle, an antenna, and a computer <br/>
You install software on your computer that works with the dongle to tune into and decode radio signals <br/>
Some popular software includes SDR#, Gqrx, and CubicSDR <br/>
### Alternatives
-While RTL-SDR is a great low-cost option, there are other more advanced SDRs like Airspy and SDRPlay that offer better performance but at a higher cost <br/>
-If you want to both receive and transmit, you might look into something like the HackRF, which is more expensive <br/>

## What is Software Defined Radio?
-Past: If you wanted to work with radio signals, you needed a bunch of physical knobs and parts that would handle different tasks <br/>
For example, you needed one part to change the radio station (tuner), another part to make sense of the incoming radio waves (demodulator), and yet another to send out your own signals (modulator) <br/>
-Present: We have powerful computers and special pieces of technology that can turn radio waves into a digital form that computers can understand <br/>
Because of this, we can use software on our computers to do all those tasks that used to require separate hardware parts <br/>
-SDR means that instead of needing a lot of expensive equipment to work with radio signals, we can do it cheaply with software <br/>
This software can process a lot of different radio signals, which makes it possible to create affordable devices that can pick up a wide range of radio frequencies — like the RTL-SDR <br/>

## What are some RTL-SDR Radio Scanner Applications?
RTL-SDR is a small gadget that lets you use your computer to pick up a wide range of radio signals <br/>
-Police and emergency services radios <br/>
-Conversations between pilots and air traffic controllers <br/>
-Signals from aircraft that show where they are, kind of like a radar <br/>
-Short text messages sent between airplanes <br/>
-Different channels of walkie-talkies <br/>
-Digital voice messages that aren't secret or encoded <br/>
-Locations of ships on the sea <br/>
-Messages sent to pagers <br/>
-Signals from wireless phones(Cordless phones that you might use around your house) and baby monitors(Monitor in the baby's room sends out a signal to the receiver that the parent carries around) in your home <br/>
-Data from weather balloons that check on the weather <br/>
-Information from your own high-flying balloons <br/>
-Temperature readings and electricity use sent wirelessly <br/>
-Amateur (ham) radio broadcasts (People who enjoy communicating with others using radio signals) <br/>
-Special amateur radio signals that share location and information <br/>
-Regular TV channels <br/>
-Signals from cell phones <br/>
-Using your Android phone as a handy radio to pick up different signals <br/>
-GPS signals to find out location information <br/>
-Checking what frequencies are being used nearby <br/>
-Pictures sent from weather satellites <br/>
-Listening to satellites in space or the International Space Station <br/>
-Studying space and the natural radio signals from our galaxy <br/>
-Watching for meteors using the radio signals they reflect <br/>
-Listening to regular FM radio stations and their digital information <br/>
-Digital and HD radio broadcasts <br/>
-Connecting to a regular radio to see a wider range of signals <br/>
-Data from taxis <br/>
-Generating random numbers for computer security <br/>
-Checking how well radio signals are working <br/>
-Figuring out what unknown signals are <br/>
-Finding where a signal is coming from <br/>
-Looking for devices that are causing interference <br/>
-Testing how well antennas and radio filters work <br/>
-Listening to signals from satellites far away in space <br/>
-Catching pictures from satellites that stay in one place in the sky <br/>

And if you have a special accessory or a newer version of the RTL-SDR(with an upconverter or V3/V4 RTL-SDR dongle to receive HF signals the applications are expanded to): <br/>
-Listen to amateur radio operators talking on different modes <br/>
-Decode digital ham radio signals <br/>
-Pick up images sent over the radio from ships <br/>
-Listen to international radio stations <br/>
-Find radar signals and other interesting or unusual broadcasts <br/>
-Important to know that some of these activities might not be allowed where you live, so you should check the rules and be careful to use the RTL-SDR responsibly <br/>

## What is the RTL-SDR frequency range?
RTL-SDR: Small device that lets your computer pick up a wide variety of radio signals, but not all RTL-SDR dongles are the same <br/>
Different models can pick up different ranges of frequencies, which is like being able to tune into different stations on your radio <br/>
-Tuner: The part inside the dongle that decides what frequencies (or radio stations) you can listen to <br/>
Think of it as the knob on an old radio that you turn to find different stations, but in this case, it's all done inside the dongle <br/>
-Frequency Range: The limits of what radio signals the dongle can pick up <br/>
Example: Some can pick up very low frequencies (like a bass in music), and some can pick up very high frequencies (like a whistle) <br/>
-Different Models: The table lists different models of tuners that are used in RTL-SDR dongles, and each one has a different range of frequencies it can pick up <br/>
| Tuner                  | Frequency range                                     |
|------------------------|-----------------------------------------------------|
| Elonics E4000          | 52 – 2200 MHz with a gap from 1100 MHz to 1250 MHz (varies) |
| Rafael Micro R820T/2/R860 | 24 – 1766 MHz (Can be improved to ~13 - 1864 MHz with experimental drivers) |
| Rafael Micro R828D     | RTL-SDR Blog V4 Model: 24 - 1766 MHz. Other models may have a cutoff around 1 GHz. |
| Fitipower FC0013       | 22 – 1100 MHz                                       |
| Fitipower FC0012       | 22 – 948.6 MHz                                      |
| FCI FC2580             | 146 – 308 MHz and 438 – 924 MHz (gap in between)   |

Table Source: Osmocom
Elonics E4000: This one has a wide range but misses some frequencies in the middle <br/>
Rafael Micro R820T/2/R860: Another common tuner that can pick up a lot of frequencies, and with some special software, it can do even more <br/>
Rafael Micro R828D (RTL-SDR Blog V4): Specific version that has a good range of frequencies it can handle <br/>
Fitipower FC0013 & FC0012: Can pick up a variety of frequencies but not as many as the first two <br/>
FCI FC2580: Has two separate ranges with a gap in the middle where it can't pick up signals <br/>
-The Elonics E4000 and Rafael Micro R820T/2/R860 and R828D dongles have the greatest frequency range <br/>

## What is the RTL-SDRs sample rate?
The maximum sample rate is 3.2 MS/s (mega samples per second) <br/>
However, the RTL-SDR is unstable at this rate and may drop samples <br/>
The maximum sample rate that does not drop samples is 2.56 MS/s, however some people have had luck with 2.8MS/s and 3.2 MS/s working well on some USB 3.0 ports <br/>
Footnote: <br/>
-sample rate: How quickly a camera takes pictures <br/>
The RTL-SDR can 'take pictures' of radio waves up to 3.2 million times per second <br/>
But when it tries to go that fast, sometimes it misses some 'pictures' (this is what they mean by 'dropping samples') <br/>
-Most of the time, it works well if it 'takes pictures' a bit slower, at 2.56 million times per second <br/>
Some people have found that if they use a really good USB port on their computer, like the faster USB 3.0 kind, the RTL-SDR can handle taking 'pictures' at the fastest speed without missing any <br/>












Dropped samples are okay if you are just visualizing the spectrum, but will cause problems if you want to demodulate/decode signals.

![RTL-SDR1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b5ff26a4-dcf4-40d8-b30b-6fd112c492ba)


Reference: <br/>
https://www.rtl-sdr.com/about-rtl-sdr/ <br/>
