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



```
./rtl_sdr /tmp/capture.bin -s 1.8e6 -f 392e6
```

Purpose: This command captures radio signals at 392.0 MHz frequency with a sample rate of 1.8 MS/s (MegaSamples per second) and saves the data to a file named capture.bin in the /tmp directory.
Note: Ensure you have the necessary permissions to access the RTL-SDR device. This might involve adjusting udev rules or running the command with sudo to execute as root.
