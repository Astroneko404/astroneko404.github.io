---
title: Importing ADX2 to UE4
layout: post
tags: GameDev UE
permalink: /posts/:title/
date: 2021-12-9
---

The purpose of this note is a reminder that denotes several key points during importing ADX2 to Unreal Engine 4.

1. Pay attention to your Visual Studio version:

    | Unreal Engine Version | Visual Studio Version |
    |-----------------------|-----------------------|
    | 4.25 or Later         | VS 2019 (Default)     |
    | 4.22 or Later         | VS 2017 / VS 2019     |
    | 4.15 or Later         | VS 2017               |
    | 4.10 to 4.14          | VS 2015               |
    | 4.2 to 4.9            | VS 2013               |

2. While installing Visual Studio, make sure to check the "Game development with C++", which includes C++ profiling tools and other toolkits.
3. If anything above is missing, after copying the "Plugins" folder from the CRIWARE folder to your project folder, you may see following error message after rebuilding modules in your project:
    ```
    YourProject could not be compiled. Try rebuilding from source manually.
    ```

### Reference
1. <a href="https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/DevelopmentSetup/VisualStudioSetup/" target="_blank">
Setting Up Visual Studio for Unreal Engine</a>
