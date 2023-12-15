---
layout: post
title:  "Image Transformation"
---
# Image Transformation
Image Transformation: <br/>
![ImageTransformation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d731815c-c144-4bd5-9ccf-e9805bfbb033) <br/>
Image is transformed from spatial domain(h(n)) to frequency domain(H(f)). <br/>
Transform: Signals in spatial domain -> Signals in frequency domain <br/>
Inverse Transform: Signals in frequency domain -> Signals in spatial domain <br/>
No information loss through Transform or Inverse transform <br/>
Fourier's Idea: Periodic Functions could be represented as a weighted sum of sines and cosines <br/>
-> If we set the period as infinity, periodic functions can be any functions<br/>
Let’s assume that f(x) is the signals in 1D spatial domain, four periodic functions are cos(8θ), cos(4θ), cos(2θ), cos(θ) <br/>
f(x) = 0.2xcos(8θ) + 0.4xcos(4θ) + 0.3xcos(2θ) + 1xcos(θ) <br/>
The result of transform is to find the co-efficients such as 0.2, 0.4, 0.3, and 1 <br/>

# Period
![ImageTransformation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/68ab1487-0dec-45aa-9838-80ba6f4db792) <br/>
Period: Time between current peak and next peak <br/>
# Variation of Peak and Phase
![ImageTransformation3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7a2304ec-152a-47f2-a6d7-ca4c2a616647) <br/> 
A: Amplitude <br/>
B: Period (2pi/B) <br/>
C: Phase Shift <br/>
D: Vertical Shift <br/>
![Image_Transformation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/58301186-61b9-42ab-b897-13d2aa698687) <br/>

# Image Transformation 
![Image_Transformation5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/76cd838e-1069-4ecc-ad3f-451be3840af0) <br/>
Red Signal: Weighted sum of blue signals <br/>
Blue Signal: Basis Function <br/>
(1) Each basis function is orthogonal to other basis functions <br/>
Assuming you have basis functions of  f1(x) ~ f10(x), you cannot make f1(x) from any combination of other basis functions. <br/>
Inner product of orthogonality was zero <br/>
(2) Norm size of basis function should be 1. <br/>
Ex. Similar to the basis vector which spans the space. V=(1,0) U=(0,1), You can represent any vector by using weighted sum of U,V. <br/>
(3,2) = 3*V + 2*U ---- generalization ---> (x,y) = x*V + y*U <br/>

# Basis Function of Image 
![Image_Transformation6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/15a7d7d7-8cd6-492d-97a7-334a310e28e9)
X: Image Coordinate, Y: Image Intensity <br/>
Left: Low Frequency, Right: High Frequency <br/>
Black: Low Intensity, White: High Intensity <br/>
Intensity: Value of a pixel <br/>
RGB Format: <br/>
Values of R, G, B are intensity <br/>
YCbCr Format: <br/>
Values of Y, Cb, Cr are intensity <br/>

# Discrete vs. Continuous 
Data Sampling ->  Data Quantization -> Image Transformation <br/>
Data Sampling: Selecting continuous images in regular intervals (light => electrical)<br/>
Data Quantization: Converting an input from a continuous or otherwise large set of values (real numbers) to a discrete set (electronic -> Digitalized) <br/>
Image Transformation: According to Fourier Transform, periodic functions can be represented by a weighted sum of sines and cosines, and if the periods are set to infinity, periodic functions can be any functions. Using this concept, as it is hard to change the images itself in a spatial domain, we change it to the frequency domain and fine tune the coefficient of sines and cosines, therefore changing the intensity of each signal components to change the original image. (Discrete -> Discrete)<br/>
-Image Transformation happens after data sampling and quantization therefore it deals with discrete signals. <br/>
-Basically it is a discrete transformation for 2D signals (ex.Discrete Fourier Transform, Discrete Cosine Transform ) <br/>
<br/>
Discrete Fourier Transform <br/>

![Image_Transformation7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/205e23d5-9ac0-4258-b4ac-fb02335d7ce9)
-근본적인 주기 (u개의 discrete한 value x로 근사화할 수 있는 sine, cosines)
