# RTL-SDR Test
## Step1: Access to RTL-SDR.com Quick start guide 
https://www.rtl-sdr.com/rtl-sdr-quick-start-guide/ <br/>

![RTL-SDR_Test1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d15ec6c7-6d61-44c7-85a3-4f982938c36d) <br/>
Click on 설정 <br/>
![RTL-SDR_Test3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/801f4c43-e073-49b6-ba7c-59688301264d)
Navigate to USB <br/>
![RTL-SDR_Test2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/21d9b698-4a1c-44da-9f9b-efe4ae66fdc7) <br/>
Search for more > Select Realtek RTL2838UHDIR [0100] <br/>
![RTL-SDR_Test4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5e06fa5b-3264-4bf3-84b4-ff4eda2c2f20) <br/>
Press Ok > Press 시작(T) <br/>


## Using rtl-sdr to Capture Radio Samples
The rtl-sdr code can be checked out with: <br/>
```
git clone https://gitea.osmocom.org/sdr/rtl-sdr.git
```
![RTL-SDR_Test5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f0ff60d9-80ed-4c20-8250-f5a823274f75) <br/>
```
cd rtl-sdr/
mkdir build
cd build
cmake ../
make
sudo make install
sudo ldconfig
```
install development packages for libusb1.0 and can either use cmake or autotools to build the software. <br/>
Building with cmake: <br/>
```
cmake ../ -DINSTALL_UDEV_RULES=ON
cd rtl-sdr/
autoreconf -i
./configure
make
sudo make install
sudo ldconfig
sudo make install-udev-rules
```

## Using rtl-sdr to Capture Radio Samples
```
cd grc_files/
gnuradio-companion 
#Tab
gnuradio-companion fm_receiver_test.grc
```

## Filter Technique 
FIR Filter <br/>
Filter tab 갯수가 30개 ~ 300개 갯수 커짐 <br/>
IIR Filter <br/>
수학적 관점에서 feedback <br/>
분모가 0 <br/>
Filtering이 확 틀어질 수 있는 가능성이 있음 <br/>
=> 통신 기법에서 FIR filter를 가장 많이 씀 <br/>
FIR Filter는 대체로 시킴 <br/>
빛 level sampling , filtering에 있어서 IIR filter는 좋은 선택지인게 의문 <br/>
filter 돌리면 외부 signal은 일부 제거 <br/>
잔상이 남음 <br/>

## Audio Application Example
우리가 가지고 있는 음악 파일 <br/>
노이즈. 잡다한게 많이 낌
음악 파일내 노이즈 제거하려면? <br/>
우리가 보려는 음악 영역대는 0~5000 <br/>

transition region passband 크게, fr 갯수가 몇 1000개! <br/>
fs: sampling rate <br/>
cutoff: 어디쯤이 설정 freq <br/>
좌, 우 filtering
butter_lowpass_filter <br/>
어느 정도 여유를 가지면서 ~ <br/>

## Matched Filter
Matched Filter는 최대 신호 세기로 해서 복구 시키겠다 <br/>
Matched Filter <br/>
=> 어려움 <br/>

```
cd grc_files/
gnuradio-companion 
#Tab
gnuradio-companion direct_view.grc
```

grc file > Directive View <br/>
Waterfall <br/>
빨간색: 블루투스 signal <br/>

중간에 Low Pass filter 연결하기 <br/>
100Khz 
1khz

Link: <br/>
https://engineering.purdue.edu/VISE/ee438L/ <br/>







