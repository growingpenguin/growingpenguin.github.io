---
layout: post
title:  "USRP Environmental Setup 4~6"
---
# USRP Environmental Setup 4~6
## Introduction
SDR이 잘되지는 않음. 증폭기 필요 <br/>
AM: 단파  <br/>
FM: 중파  <br/>
=> 국 정보원에서 많이 씀 
SDR 차원에서 동작 필요 <br/>
- 실제 생활에서 쓰는 것부터 시작 <br/>
AM, FM 필수적으로 쓰이는 Radio


## AM/FM 라디오 구현 
RF-Front End -> Freq Down conversion -> Baseband Filter -> Envelop Detector -> Audio Output <br/>
**RF Front End**: <br/>
Initial stage of the receiver. Captures the radio frequency (RF) signals transmitted through the air <br/>
The RF Front End is designed to receive a wide range of frequencies and includes an antenna and possibly a pre-amplifier.
**Frequency Downconversion:** <br/>
Converts the captured RF signal to a lower frequency for easier processing <br/>
Achieved using a mixer that combines the incoming RF signal with a local oscillator signal, resulting in a signal that is the difference (or sometimes the sum) of the two frequencies <br/>
This lower frequency is called the Intermediate Frequency (IF) <br/>
Footnote: <br/>
Local Oscillator Signal <br/>
Another "song," but this one is created inside your radio <br/>
It has a specific frequency, kind of like a constant note being played <br/>



















Example: <br/>
송신자가 수신자에게 sine wave 보냄. 수신자는 모름 <br/>
Amplitude -1.5~1.5. 
Power 얹어주면 올라감 <br/>
sine wave 곱함 <br/>
Filter 거치면 사라짐 <br/>
Envelop Detector 로 point를 잡아 sine wave 잡아냄 <br/>

Amplitude Modulation: <br/> 
높낮이 <br/>
Frequency modulation: <br/>
주파수 그 자체. 주파수의 다름을 가지고 신호 송수신 <br/>

### AM/FM 라디오 세팅
AM 신호 파워 주파수 전달되느냐 차이다 <br/>
AM, FM 높낮이가 상당히 다름 <br/>
FM <br/>
Signal 높낮이가 일정 <br/>
FM 높으면 빠르고 낮으면 느려짐 
AM FM 다 signal로 복구시키는 작업 <br/>
AM 는 cos(wt+0(t)) 다 날림 <br/>
미분해서 recovery <br/>


AM 라디오 동작 예시: <br/>
AM Demodule <br/>
잘 쓰면 복구 <br/>
AM TV는 RTL-SDR는 증폭기 등 .. <br/>
WBFM Receive <br/>
WB: WIDe band <br/>
Resampler: Downsampling <br/>
=> AM FM는 소리만 듣는걸로 <br/>
48KHZ로 setting 하기 <br/>

