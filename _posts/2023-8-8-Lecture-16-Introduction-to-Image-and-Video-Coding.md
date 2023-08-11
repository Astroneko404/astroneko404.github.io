---
title: Lecture 16 - Introduction to Image and Video Coding【Lecture Notes】
layout: post
category: Misc
date: 2023-8-8
---

This article is a lecture note for <a href="https://www.youtube.com/watch?v=SnstUsMJ4V4&list=PLF8C86C2E163D8E4E&index=16" target="_blank">Lecture - 16 Introduction to Image and Video Coding</a>

## Intro
In previous lectures we have covered various speech codings:
- <u>Waveform-based approach</u>: PCM, APCM, DPCM, etc.
  - In which 1-dimensional signals variable respect to time
- <u>Parametric approach</u>: LPC Analysis

<br/>
How does image coding works?<br/>
We are taking an image as a 2-dimensional array, and the signal is represented as $$s(n_1, n_2)$$, which $$n_1$$  and $$n_2$$ are pixel indices.<br/>
Instead of having variability respect to time, image has variability respect to space. <br/>
$$s(n_1, n_2)$$ is the sampled form of the analog 2D waveform.
<br/><br/>
Then how about videos?<br/>
Video could be taken as a sequence of images, which contains a 3rd dimension: time.<br/>
It has variability respect to time.<br/>
We could denote this as $$s(n_1, n_2, k)$$, where $$k$$ indicates the frame number.
<br/><br/>
The fundamental bitrate in case of image and video is much higher than that of the speech signal. <br/>
Therefore, image and video must be compressed to a very significant extent.

## Image Coding
The redundancy in almost all types of natural images is very high.
<br/><br/>
Basically there are two types of redundancy in images:
- <u>Statistical redundancy</u>: The redundancy existing in space in between the image samples which are in he close neighborhood
- <u>Phychovisual redundancy</u>: Information that is relatively unimportant to the human visual system

<br/>
How do we make use of these types of redundancy?<br/>
First suppose we have a patch of images which is represented by numbers.<br/>
We could scan these numbers from the top left to the bottom right, which is called row-scan ordering.<br/>
Therefore a sequence of one dimensional pixels will be available to us, and it should be possible for us to exploit the redundancy.

#### A Generic Block Diagram of Image processing
```
                --------------        -----------         -----------------
s(n1, n2)  -->  | Transformer |  --> | Quantizer |  -->  | Entropy Encoder |
                --------------        -----------         -----------------
                   Lossless             Lossy                 Loseless
                 [Statistical]       [Psychovisual]
```
Every symbol at the quantizer output will be associated with some probability of occurence, and based on the probability of occurence we could compute the entropy.<br/>
According to Shannon's entropy coding theorem, the minimum attainable bit rate that a system can have is going to be its entropy, so we cannot compress beyond its entropy value.
<br/><br/>
The diagram above is called our encoder, and the decoder will do the exact reversal of this.
```
    ------------------         --------------        --------------------
--> | Entropy Decoder |  -->  | Dequantizer |  -->  | Invert Transformer |  ->  s(n1, n2)
    ------------------         --------------        --------------------
```

#### Lossless Compression & Lossy Compression
Some examples of lossless compression:
- <u>Huffman Coding</u>: Choose a representation for each symbol, resulting in a prefix code
- <u>Arithmetic Coding</u>: Encode the sequence using a number
- <u>Lempel - Ziv Coding</u>

<br/>
An example of arithmetic coding:
![](../assets/img/misc/Arithmetic_coding_example.svg)
<br/><br/>
Demerit of using lossless compression:
- Only achieve a limited amount of compression using the lossless techniques
- Actually it is hard to detect the degradation in the quality of the image
- Accepting some lossy image compression scheme will lead to more efficiency.

#### Transformation Block
In order to know what lossy element is, we need to dig deeper in the transformation block.<br/>
What the transformation process tends to do is to exploit the correlation that exists in the signal. This is called energy packing.<br/>
Transformer should offer some energy compaction. Energy compaction means that the energy is more concentrated using only a few spectral coefficients.
<br/><br/>
Two requirements for transformation:
- It must be energy preserving
- It must be an orthogonal transform

<br/>
Some popular transformations:
- Karhunen-Loeve transform
- Discrete Fourier Transform
- Discrete Cosine Transform
- Discrete Wavelet Transform
