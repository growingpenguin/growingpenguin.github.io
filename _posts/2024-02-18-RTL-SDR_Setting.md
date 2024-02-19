# RTL-SDR Setting
## rtl-sdr 
RTL-SDR: <br/>
Way to turn a cheap TV tuner into a device that can pick up a wide range of radio signals <br/>
-These TV tuners are usually used to watch digital TV on a computer and are based on a specific type of chip made by Realtek(RTL2832U) <br/>
-What makes them special is that this chip can send the raw radio signals it receives directly to a computer <br/>
-Originally, this feature was meant for listening to digital radio broadcasts (like DAB, DAB+, and FM) <br/>
-The idea to use these TV tuners as general-purpose radio signal receivers (or software-defined radios - SDRs) was first discovered by someone named Eric Fry. Another person, Antti Palosaari, often mistakenly credited with this discovery, actually didn't have a role in starting the RTL-SDR project <br/>
Footnote: <br/>
Radio signal: <br/>
A kind of invisible wave that carries information (like music or voice) from one place to another <br/>
To pack as much information as possible into this wave and then unpack it at the other end, scientists use a clever trick by splitting the information into two parts and mixing it with the wave in two different ways
I/Q Samples: <br/>
I/Q stands for In-phase/Quadrature <br/>
In radio communications, signals can be represented as a combination of two separate components: <br/>
"In-phase" component(I): <br/>
Varies in phase(Step) <br/> 
"Quadrature" component(Q): <br/>
Varies in amplitude, 90 degrees out of phase  <br/>
These components are used to encode the signal's information.








임포티먼트 데이터 센터 <br/>





DVB-T dongles based on the Realtek RTL2832U can be used as a cheap SDR, since the chip allows transferring the raw I/Q samples to the host, which is officially used for DAB/DAB+/FM demodulation. The possibility of this has been discovered by Eric Fry (History and Discovery of RTLSDR). Antti Palosaari has not been involved in development of rtl-sdr.

Reference: <br/>
https://osmocom.org/projects/rtl-sdr/wiki
