---
layout: post
title:  "USRP Environmental Setup 7~9"
---
# USRP Environmental Setup 7~9
## Introduction
High-level block diagram of a digital communication system <br/>
The basic components involved in transmitting(Transmitter) and receiving digital data(Receiver) <br/>
**Raw Signal (0100011)**: <br/>
The original binary data that you want to transmit <br/>
It's a sequence of bits, where '0' and '1' represent two different states <br/>
**Symbol Mapping**: <br/>
Maps the signal to 0 and 1 <br/>
At the transmitter, the binary data is first converted into symbols <br/>
In the case of BPSK, as mentioned, the bits '0' and '1' might be mapped to -1 and +1, respectively <br/>
This is done to prepare the data for modulation <br/>
**Upsampling**:  <br/>
After symbol mapping, the data is upsampled <br/>
Upsampling is the process of increasing the sample rate by inserting zeros between the original samples to increase the length of the data sequence, which is then followed by a filtering process to smooth out the signal <br/>
Example: <br/>
Starting with the Original Sampled Signal: <br/>
You begin with a sequence of symbols, which, in your case, would be the mapped values from your binary data <br/>
Let's say the sequence is [-1, 1, -1], corresponding to the binary sequence 010 <br/>
Inserting Zeros: <br/>
To upsample by a factor of L (L being an integer), you would insert L-1 zeros between each pair of original samples <br/>
If L is 3, for example, you would insert two zeros between each symbol <br/>
The sequence would now look like this: [-1, 0, 0, 1, 0, 0, -1] <br/>
Interpolation Filter (Low-pass Filter): <br/>
Inserting zeros isn't enough because it introduces discontinuities in the signal <br/>
To address this, you apply an interpolation filter, which is typically a low-pass filter <br/>
This filter will smooth out the signal, removing the high-frequency components introduced by the zero-insertion step and interpolating between the non-zero samples <br/>
Effect on the Signal Spectrum: <br/>
Upsampling stretches the spectrum of the original signal and creates copies of it <br/>
The interpolation filter is designed to keep the original spectrum while suppressing the copies <br/>
Resulting Upsampled Signal: <br/>
After filtering, you get an upsampled signal with a higher sample rate that more closely resembles a continuous-time signal <br/>
This signal can now be more effectively used in further processing, such as pulse shaping for transmission <br/>
Take a sequence, upsample it by a factor of 3, and apply a simple filter to smooth the signal <br/>
(1)Say the original sequence is [-1, 1, -1] (corresponding to your binary data 010). Upsampling by a factor of 3:
(2) Insert zeros <br/>
Original: -1 1 -1 <br/>
Upsampled: -1 0 0 1 0 0 -1 <br/>
(3)Apply a simple filter to this upsampled sequence to smooth it out <br/>
In a real system, this would be a more complex operation <br/>
(Often involving a root raised cosine filter or another filter designed to minimize ISI and spectral leakage) <br/>
But for simplicity, we can use a basic averaging filter in this example <br/>
**Pulse Shaping (Root Raised Cosine Filter)**: <br/>
The upsampled data is then passed through a pulse shaping filter <br/>
The root raised cosine filter is designed to minimize ISI, as it has properties that cause the pulses to have minimal interference with one another <br/>
Pulse shaping is crucial to maintain the integrity of the signal over the transmission medium <br/>
**Modulation (Carrier Wave Multiplication)**: <br/>
![SDR7-9_1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a77cb8ce-3b40-4e9b-b48b-0ae7d75f41d0) <br/>
![SDR7-9_2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3d489cb3-7a07-422d-aa52-4653f126026d) <br/>
Next, the pulse-shaped signal is modulated onto a carrier wave <br/>
This is done by multiplying the data signal with a cosine wave, as indicated by the cos(2πf_ct) term in the diagram, where f_c is the carrier frequency <br/>
Moves the data signal up to a higher frequency band suitable for transmission <br/>



Footnote: <br/>
Frequency offset: <br/>
Discrepancy between the expected frequency of a signal and its actual received frequency <br/>
This can occur due to a variety of reasons, such as Doppler shift due to relative motion between transmitter and receiver, inaccuracies in oscillator frequencies at the transmitter or receiver, or propagation delays <br/>
serial = <br/>
Pulse: <br/>
Single sudden and intense change that occurs in a wave or in a phenomenon that repeats at a regular interval <br/>
ISI(Intersymbol Interference): <br/>
Problem that occurs in digital communication when one symbol, or pulse, interferes with subsequent symbols <br/>
This interference happens because the symbols or pulses overlap, making it hard for the receiver to tell them apart <br/>
carrier wave: <br/>
Continuous electromagnetic radiation, of constant amplitude and frequency, that is given out by a transmitter <br/>






Digital signal is a series of pulses that represent your data <br/>
Now, if these pulses are not shaped properly, they can spread out and interfere with neighboring pulses, making it hard to tell them apart when you try to read the data later on <br/>


## QAM Modulation Simulation/Implementation
-Quadrature Amplitude Modulation <br/>

The root raised cosine filter helps each kid (or pulse) to stay in the right spot without bumping into the others. It shapes each pulse so that it fits neatly into its own time slot, without spilling over into the next one. This helps to keep the message clear and prevents the information from getting jumbled up as it travels from the sender to the receiver. That's why pulse shaping with this filter is so important—it makes sure the message gets to the other side just the way it was sent.





Frequency offset to 10 <br/>
It moves, meaning that the synchronization is not done properly <br/>
100
100

## ASK Modulation 세팅/시뮬레이션
Amplitude Shift Keying <br/>
-Amplitude 조절 가지고 데이터 송수신 <br/>




## PAM Modulation 세팅/시뮬레이션

00 -> 01 -> 11 -> 10 <br/>
1 bit difference <br/>

## BPSK Modulation 세팅/시뮬레이션
Binary Phase Shift Keying <br/>
-2분법을 Phase로 Shift한 변조법 <br/>
## Differential BPSK Modulation Simulation/Implementation
빛 변환 따라 바뀜 <br/>
Time recovery 성능이 좋으면 좋지만 <br/>
변환시 shifting을 해서 정보 recovery <br/>

Differential Encoder <br/>

Enter usrp -> USRP Sinc <br/>
Vlaue: 2.45e9 <br/>
Sync: No sync <br/>
center_free: <br/>


Low pass filter 지우기 -> <br/>


Reference: https://www.geeksforgeeks.org/bpsk-binary-phase-shift-keying/ <br/>

https://github.com/bastibl/gr-ieee802-11 <br/>
https://github.com/greatscottgadgets/gr-bluetooth <br/>
https://github.com/drtyhlpr/ble_dump <br/>
https://wiki.gnuradio.org/index.php/Tutorials <br/>
(Writing the Yaml for the block) <br/>
https://wiki.gnuradio.org/index.php?title=Creating_Python_OOT_with_gr-modtool <br/>
https://wiki.gnuradio.org/index.php?title=Creating_C%2B%2B_OOT_with_gr-modtool <br/>
