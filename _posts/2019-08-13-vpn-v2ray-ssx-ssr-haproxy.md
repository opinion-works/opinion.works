---
layout: post
title: "如何科学（翻墙）上网"
date: 2019-08-13 10:00:00 +0800
categories: network v2ray
tags: network v2ray
excerpt: 作为一名资资深（加班很多）的程序员，在日常工作中遇到坑是非常常见的。本着我遇到的问题，90%以上的人肯定遇到过的原则。一般遇到我直接无法想出办法的场景，我一般是会直接上网搜索。在国内，排名前三的搜索引擎 baidu, bing, soso 谁用谁知道。此时不得不提的是一个前同事文章不当伸手党，从抛弃百度开始。百度不是一个搜索引擎，但是在国内，bing 也好不到哪里。是时候展示真正的技术了
description: 如何科学上网（搭梯子）
---

## Table of Contents

1.  [如何科学（翻墙）上网](#org71942bb)
    1.  [科学上网的原理](#orga4cf83a)
    2.  [科学上网的方式](#orgd84c006)
        1.  [购买服务（最简单）](#orgb045793)
        2.  [shadowsocks](#org9d13d7a)
        3.  [v2ray](#org2f6f78b)
    3.  [配置](#orgda681dc)
        1.  [服务端](#orgfeaecdd)
        2.  [客户端](#org8a8224f)


<a id="org71942bb"></a>

## 如何科学（翻墙）上网

作为一名资资深（加班很多）的程序员，在日常工作中遇到坑是非常常见的。本着我遇到的问题，90%以上的人肯定遇到过的原则。一般遇到我直接无法想出办法的场景，我一般是会直接上网搜索。在国内，排名前三的搜索引擎 baidu, bing, soso 谁用谁知道。此时不得不提的是一个前同事文章 [不当伸手党，从抛弃百度开始](https://mp.weixin.qq.com/s/o9SX1GSpt1e68DjoGIS9nQ) 。百度不是一个搜索引擎，但是在国内，bing 也好不到哪里。是时候展示真正的技术了－－－ 搭梯子到外面看看。该篇文章，需要一定的基础（毕竟搭梯子（翻墙）是件技术活）。


<a id="orga4cf83a"></a>

### 科学上网的原理

很久很久以前我们上网的方式是这样的：

![img](/assets/posts/images/20190813/original.png)

我们直接访问服务提供商，获取数据。服务提供商，直接将相关的数据发送给我们。没有中间商赚差价，这不就是很多人追求的嘛（哈哈哈哈哈）。当有了利益或者危
险的时候中间商就出现了。这种方式对于小朋友不友好啊，万一小朋友不小心看到了不该看的东西怎么办，我党得为小朋友负责啊。所以我党说，我要检查下你看得东
西，合适看的话，我再给你看。

我党说要有墙（[GFW](https://zh.wikipedia.org/wiki/%25E9%2598%25B2%25E7%2581%25AB%25E9%2595%25BF%25E5%259F%258E)），于是便有了墙。

![img](/assets/posts/images/20190813/gfw.png)

在这种情况下，我们的小朋友不能再随心所欲的访问他想访问的东西了，这可如何是好呢？这个需求是如此的强烈，小朋友怎么能忍呢。于是小朋友就用微信联系到了，
自己再国外的朋友。说我想访问下某个网站，麻烦你访问下，把内容打包下发给我啊。于是我们上网的方式就变成了如下所示。

![img](/assets/posts/images/20190813/proxy.png)

1.  发微信给国外的小朋友，hi 还好吗（how are you）？
2.  GFW: 微信聊天信息，然后就把信息转发给了国外的小朋友
3.  国外的小朋友收到了GFW 转发的消息，知道是国内的朋友发送的消息。于是回复： hi, 我还好，你呢（Fine, thank you and you）
4.  GFW: 又是聊天，走你。小朋友：终于建立了一个微信的通道
5.  小朋友：麻烦帮我访问下 google, 然后把内容通过微信发给我。谢谢
6.  GFW: 又是聊天，走你。国外小朋友： 访问 google 啊，小意思
7.  国外小朋友：顺手就访问了谷歌
8.  国外小朋友：得到了 google 的内容
9.  国外小朋友：这是谷歌的内容，我给你打个压缩包，微信发给你。走你
10. GFW: 又是微信聊天，继续走你。小朋友：哈哈，终于访问到 google 了

通过微信这个通道完成了访问国外网站的需求。国外的小朋友即国外的host, 完成代理任务，访问内容，并且通过指定的通道返回内容。


<a id="orgd84c006"></a>

### 科学上网的方式


<a id="orgb045793"></a>

#### 购买服务（最简单）

[Lantern 蓝灯](https://github.com/getlantern/download#%25E8%2593%259D%25E7%2581%25AFlantern%25E6%259C%2580%25E6%2596%25B0%25E7%2589%2588%25E6%259C%25AC%25E4%25B8%258B%25E8%25BD%25BD)：蓝灯可能是目前比较好用的免费VPN软件，其宣称采用P2P技术，如果全球有人使用了该软件，都可以作为代理服务端为他人服务


<a id="org9d13d7a"></a>

#### shadowsocks

shadowsocks 简称 SS, 是一种基于 [SOCKS5](https://zh.wikipedia.org/wiki/SOCKS#SOCK5) 代理方式的代理软件。shadowsocks 支持很多加密方式，可以使得数据包很难被防火墙识别，从而达到科学上网的目地。
原理图如下所示

![img](/assets/posts/images/20190813/ss.png)


<a id="org2f6f78b"></a>

#### v2ray

提到 [v2ray](https://www.v2ray.com/) , 不得不说的是 Project V. Project V 是一些列工具的集合，它可以帮助你打造术语自己的专属基础通信网络. v2ray 就是这一系列工具中的核心工具，主要负责网络协议和功能的实现，与其他 Project V 进行通信. v2ray 有如下一些特性

-   多入口多出口: 一个 V2Ray 进程可并发支持多个入站和出站协议，每个协议可独立工作。
-   可定制化路由: 入站流量可按配置由不同的出口发出。轻松实现按区域或按域名分流，以达到最优的网络性能。
-   多协议支持: V2Ray 可同时开启多个协议支持，包括 Socks、HTTP、Shadowsocks、VMess 等。每个协议可单独设置传输载体，比如 TCP、mKCP、WebSocket 等。
-   隐蔽性: V2Ray 的节点可以伪装成正常的网站（HTTPS），将其流量与正常的网页流量混淆，以避开第三方干扰。
-   反向代理: 通用的反向代理支持，可实现内网穿透功能。
-   多平台支持: 原生支持所有常见平台，如 Windows、Mac OS、Linux，并已有第三方支持移动平台。

v2ray 的原理跟 shandowsocks 很相似， 但是 v2ray 相对设计更加灵活。


<a id="orgda681dc"></a>

### 配置

因为被墙的厉害，所以我们采用如下的部署的结构

![img](/assets/posts/images/20190813/archi.png)

在此处我们使用 docker, docker-compose 来完成部署


<a id="orgfeaecdd"></a>

#### 服务端

1.  docker-compose

        
        version: "3"
        services:
          init:
            image: certbot/certbot
            restart: "no"
            volumes:
              - ./data/certbot/conf:/etc/letsencrypt
              - ./data/certbot/www:/var/www/certbot
            entrypoint: "sh -c 'certbot certonly --webroot -w /var/www/certbot --email mail@doamin.com -d v.domain.com --rsa-key-size 4096 --agree-tos --force-renewal --non-interactive && cat /etc/letsencrypt/live/v.domain.com/fullchain.pem /etc/letsencrypt/live/v.domain.com/privkey.pem > /etc/letsencrypt/live/v.domain.com/v.haproxy.pem'"
          certbot:
            image: certbot/certbot
            restart: unless-stopped
            command: []
            volumes:
              - ./data/certbot/conf:/etc/letsencrypt
              - ./data/certbot/www:/var/www/certbot
            entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew && cat /etc/letsencrypt/live/v.domain.com/fullchain.pem /etc/letsencrypt/live/v.domain.com/privkey.pem > /etc/letsencrypt/live/v.domain.com/v.haproxy.pem; sleep 12h & wait $${!}; done;'"
          haproxy:
            # replace username/repo:tag with your name and image details
            image: haproxy
            restart: unless-stopped
            ports:
              - "443:443"
            networks:
              - webnet
            volumes:
              - ./data/haproxy:/usr/local/etc/haproxy/
              - ./data/certbot/conf:/etc/letsencrypt
              - ./data/certbot/www:/var/www/certbot
            command: []
          v2ray:
            image: v2ray/official
            restart: unless-stopped
            networks:
              - webnet
            volumes:
              - ./data/v2ray/vmess/:/etc/v2ray/
            command: ""
          nginx:
            image: nginx
            restart: unless-stopped
            ports:
              - "80:80"
            networks:
              - webnet
            volumes:
              - ./data/nginx:/etc/nginx/conf.d
              - ./data/certbot/www:/var/www/certbot
        networks:
          webnet:
        volumes:
          haproxy:
          v2ray:
    
    通过共享 /data/certbot/www, 和 /data/certbot/conf 一边可以使用 certbot 来进行 let's encrypt 的验证，一遍生成证书。一边可以让 haproxy 来使用生成的证书。

2.  haproxy

        
        global
                daemon
                log stdout format raw daemon
        
        
        defaults
                log global
                mode tcp
                option tcplog
        
                option dontlognull
                #maxconn 2000
                timeout connect 24h
                timeout client 24h
                timeout server 24h
        
        frontend ssl
                mode tcp
                bind *:443 ssl crt /etc/letsencrypt/live/v.domain.com/v.haproxy.pem
                tcp-request inspect-delay 5s
        
                use_backend v2ray if { ssl_fc_sni -i v.domain.com }
                default_backend nginx
        
        backend v2ray
                mode tcp
                server v2ray v2ray:80
        
        backend nginx
                mode tcp
                server nginx nginx:80
    
    通过 haproxy 来完成 443 端口的复用。使用 SNI (server name indicator) 的方式，来区分是走那一路协议，然后分发给不同的后端服务。默认使用 nginx 进行响应。

3.  v2ray

        
        {
          "log": {
            "loglevel": "info"
          },
          "inbounds": [
            {
              "port": 80,
              "protocol": "vmess",
              "settings": {
                "clients": [
                  {
                    "id": "d314c65c-f70f-4e1d-91fa-46821204accc",
                    "alterId": 64
                  }
                ]
              },
              "streamSettings": {
                "network": "ws",
                "wsSettings": {
                  "path": "/v",
                  "headers": {
                    "host": "v.domain.com"
                  }
                }
              }
            }
          ],
          "outbounds": [
            {
              "protocol": "freedom",
              "settings": {}
            }
          ]
        }
    
    使用 websocket 的方式来进行服务。请将 v.domain.com 改为自己的地址

4.  nginx

        
        server {
            listen 80 default_server;
            server_name _;
        
            server_tokens off;
        
            location /.well-known/acme-challenge/ {
                root /var/www/certbot;
            }
        
            location / {
                proxy_pass https://domain.com;
            }
        }
    
    location **.well-known/acme-challenge** 被用来做 let's encrypt 做证书的验证。当 let's encrypt 验证的时候，使用 certbot 生成文件的内容，来完成验证。
    
    location / 会默认的会使用网站的地址来响应。这样就会让 GFW 通过 IP 来访问的时候，得到的是我们的网站。从而不进行屏蔽。


<a id="org8a8224f"></a>

#### 客户端

1.  docker-compose

        
        version: "3"
        services:
          v2ray:
            image: v2ray/official
            restart: unless-stopped
            ports:
              - "53:53"
              - "53:53/udp"
              - "1088:1088"
              - "1089:1089"
            networks:
              - webnet
            volumes:
              - ./data/v2ray/vmess/:/etc/v2ray/
        networks:
          webnet:

2.  v2ray

        {
          "log": {
            "loglevel": "info"
          },
          "dns": {
            "hosts": {
              "geosite:category-ads-all": "127.0.0.1"
            },
            "servers": [
              {
                "address": "8.8.8.8",
                "port": 53,
                "domains": [
                  "geosite:geolocation-!cn"
                ]
              },
              {
                "address": "223.5.5.5",
                "port": 53,
                "domains": [
                  "geosite:cn"
                ]
              },
              "localhost"
            ]
          },
          "inbounds": [
            {
              "port": 53,
              "tag": "dns-in",
              "protocol": "dokodemo-door",
              "settings": {
                "address": "8.8.8.8",
                "port": 53,
                "network": "tcp,udp"
              }
            },
            {
              "port": 1088,
              "protocol": "socks",
              "sniffing": {
                "enabled": true,
                "destOverride": ["http", "tls"]
              },
              "settings": {
                "auth": "noauth",
                "udp": true
              }
            },
            {
              "port": 1089,
              "protocol": "http",
              "sniffing": {
                "enabled": true
              },
              "settings": {
                "allowTransparent": true
              }
            }
          ],
          "outbounds": [
            {
              "protocol": "vmess",
              "settings": {
                "vnext": [
                  {
                    "address": "v.domain.com",
                    "port": 443,
                    "users": [
                      {
                        "id": "d314c65c-f70f-4e1d-91fa-46821204a41a",
                        "alterId": 64
                      }
                    ]
                  }
                ]
              },
              "streamSettings": {
                "network": "ws",
                "security": "tls",
                "wsSettings": {
                  "headers": {
                    "host": "v.domain.com"
                  },
                  "path": "/v"
                }
              },
              "tag": "proxy",
              "mux": {
                "enabled": true
              }
            },
            {
              "tag": "direct",
              "protocol": "freedom",
              "settings": {}
            },
            {
              "tag": "dns-out",
              "protocol": "dns",
              "settings": {
                "network": "udp",
                "address": "8.8.8.8",
                "port": 53
              }
            }
          ],
          "routing": {
            "domainStrategy": "IPIfNonMatch",
            "rules": [
              {
                "type": "field",
                "ip": [
                  "8.8.8.8"
                ],
                "outboundTag": "proxy"
              },
              {
                "type": "field",
                "domain": [
                  "geosite:cn"
                ],
                "outboundTag": "direct"
              },
              {
                "type": "field",
                "ip": [
                  "223.5.5.5"
                ],
                "outboundTag": "direct"
              },
              {
                "type": "field",
                "outboundTag": "direct",
                "ip": [
                  "geoip:cn",
                  "geoip:private"
                ]
              },
              {
                "type": "field",
                "inboundTag": ["dns-in"],
                "outboundTag": "dns-out"
              }
            ]
          }
        }

