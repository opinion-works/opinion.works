---
layout: post
title: "Emacs 奇淫巧计"
date: 2019-06-30 20:33:50 +0800
categories: emacs
tags: emacs
excerpt: 当用 emacs 进行搜索或者跳转的时候，emacs 会将当前位置做标记，并且保存在 mark-ring 中， 如果想要跳转到原来的位置，可以使用 C-u C-SPC。如果需要跳转多次，可以使用 C-u C-SPC C-SPC C-SPC 等
description: emacs 平常使用过程中的快捷键，每天记录一点emacs的技巧
---

### emacs 快捷键


<a id="org17fc401"></a>

#### ansi-term


<a id="org25092e7"></a>

##### copy & paste

当处于 ansi-term 状态下时， 命令行是只读状态，所以需要使用特定的组合键来完成粘贴 C-c C-y, 或者使用C-x C-j 变成 line-mode, C-c C-k 退出 line mode当处于 ansi-term 状态下时， 命令行是只读状态，所以需要使用特定的组合键来完成粘贴 C-c C-y, 或者使用C-x C-j 变成 line-mode, C-c C-k 退出 line mode当处于 ansi-term 状态下时， 命令行是只读状态，所以需要使用特定的组合键来完成粘贴 C-c C-y, 或者使用C-x C-j 变成 line-mode, C-c C-k 退出 line mode


<a id="orgc004ac0"></a>

#### mark-ring

当用 emacs 进行搜索或者跳转的时候，emacs 会将当前位置做标记，并且保存在 mark-ring 中， 如果想要跳转到原来的位置，可以使用 C-u C-SPC
如果需要跳转多次，可以使用 C-u C-SPC C-SPC C-SPC 等


<a id="orgd2862b4"></a>

#### eshell


<a id="orgf07a594"></a>

##### history

可以使用 M-r 搜索 eshell 命令行历史，搜索完结果会直接在当前行显示。使用 M-n , M-p 进行上一个下一个的跳转


<a id="org48c63a8"></a>

#### navigation


<a id="org317d188"></a>

##### begin & end of function

对于大多数编程语言来讲，可以使用 C-M-a 来移动到函数头，使用 C-M-e 移动到函数尾


<a id="orgebd44fa"></a>

##### begin & end of parenthetical group

C-M-n 向前移动到括号，C-M-p 向后移动到括号


<a id="org188e89c"></a>

##### reposition point

很多时候我们仅仅是想将光标移动到上部，或者中部，或者下部，但是不进行文字滚动。此时我们可以使用 M-r 进行光标之间的切换。可以将 position
移动到 top, bottom, center


<a id="org44d3379"></a>

#### basic


<a id="org1e402a6"></a>

##### file

-   插入
    可以在当前文件插入其他文件内容，使用 C-x i 进行插入
-   在当前位置找文件
    当光标当前位置，猜文件目录，并且找到文件 find-file-at-point, 缩写为 ffap


<a id="orgf479b33"></a>

##### link

C-c C-o 可以在指定的位置添加链接，也可以在，链接可以为文件。当为文件的时候，可以指定对应的标签，用来打开文件后跳转到指定的位置。


<a id="org88e2b08"></a>

##### point & mark & region

    ```
    Lorem ipsum dolor sit amet
          ^ Cursor
    
    
          Point
          |
          Mark
          |
    Lorem ipsum dolor sit amet
          ^ C-spc
    
    
          Mark          Point
          | ----region--|
          |             |
    Lorem ipsum dolor sit amet
             move       ^
             forward ->
    
    
          Mark          Point
          | ----region--|
          |             |
    Lorem ipsum dolor sit amet
                        ^
                        C-x C-x
    
    
          Point         Mark
          | ----region--|
          |             |
    Lorem ipsum dolor sit amet
    
    Point and mark interchanged
    ```


<a id="org5aa8644"></a>

##### move to upper expression start

当我们处于一个表达式内部，比如处于一个括号内部，我们如何用更快的方法跳转到括号所在的位置？可以使用 C-M-u 跳转到
upper 的 expression 的地方。 back up expression


<a id="orgd386814"></a>

##### 移动整体代码块

选中代码块后，可以使用 C-x TAB 来进行对应的缩进操作。背后运行的命令为 indent rigidly. 也可以带参数向左移或者右移


<a id="orgba59134"></a>

##### register

可以使用 C-x r SPC 来将当前 point 保存到 register, 然后可以使用 C-x r j 来进行 register 的跳转


<a id="orga837595"></a>

##### arguments

1.  negative argument

    emacs arguments 一般都是正向操作，比如 M-c 将下一个单词的首字母大写。但是如果说我们刚输入完一个单词，
    如何当前的 position 已经无法完成当前单词首字母大写，这种情况下可以使用 negative argument, 可以将
    M-c 的生效方向转换成相反方向。


<a id="org69324f2"></a>

#### org-mode


<a id="org60f5758"></a>

##### following mode

在 org-agenda 模式下，使用 F 开启 following mode. 在这个模式下，当选中一个 org-agenda 事项的时候，会在右侧同时出现该事项的文件内容
和上下文。使用 F 也可以关闭 following mode


<a id="orgedfe92b"></a>

##### tangle

org mode 可以使用文学编程的方式来完成配置文件的编写。然后使用 org mode 的 tangle 可以将所有的代码抽取为独立的文件。可以使用
org babel tangle (C-c C-v t) 进行导出。


<a id="org43f7861"></a>

##### sparse tree

在 org-mode 中可以使用 sparse tree 来进行搜索，以便与展开匹配项，合起来非匹配项。


<a id="orgd39286a"></a>

##### code template

可以使用 <s tab 的方式，来使用模板插入内容


<a id="org727f4f1"></a>

##### 切换 org-mode buffer

-   在当前文件是 org-mode buffer 的时候，可以使用 org-switchb 来进行 org-mode buffer 的切换


<a id="org8607146"></a>

#### org agenda


<a id="org899c3a4"></a>

##### filter by tag

可以使用 / 进行 tag 级别的搜索， 命中的 tag 的项目会展示出来， 使用 C-u / 则会隐藏匹配的项目。使用 / / 取消
tag filter


<a id="orgd0f041c"></a>

##### filter by regexp

在 org-agenda 模式下，可以使用 = 来进行 regexp 的搜索，所有匹配正则表达式的 todo 都会显示出来。C-u = 将所有匹配的
的 todo 都隐藏起来。C-u C-u = 取消 regexp 匹配搜索。


<a id="orgd6c8a1b"></a>

##### filter by categary

在 org-agenda 下可以使用 < 来进行按照当前选中 item 的 category 来搜索。C-u > 来隐藏同样 category 的 item.


<a id="orgd5ca8bb"></a>

##### filter by parent headline

在 org-agenda 下使用 ^ 来现实当前 todo item 的 slibing item.


<a id="org52e5245"></a>

#### magit


<a id="org6ab6744"></a>

##### 分割 unstaged hunk

当使用 magit 的 status 的时候，如果一大段代码，只想提交一段，可以使用 C-SPC 选中想要 stage 的代码片段，
然后使用 S(stage) 就可以将 hunk 分割开。


<a id="org3984b3c"></a>

### emacs 基本理论


<a id="orgfb6b1ca"></a>

#### emacs 命令

emacs 中所有的按键都被绑定到 command 上。emacs 上大概有三千多个命令。经常用到的命令都会绑定到相应的快捷键上。

