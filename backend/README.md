# SimpleChat

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Built with](#built-with)
- [Available Scripts](#available-scripts)

This is a chat application or platform that enables real-time
communication between users through their computers or mobile
devices on web browsers with their sensitive information secured by
the server. Users have been given a lot of features and option to
make communication between them and their counterparts seamless and
fun to engage with.

Images, Voice recordings, Text messages filled with emoji options
can be shared. Real time communication with voice calls or audio
calls can also be made to keep things more intresting.

### Visual overview

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331260/SimpleChatimage/vw8wmukvq4o3pjowvw3b.png)

### **Features**

#### **Light or Dark Theme**

Light or dark theme option was integrated into the app in order
to allow users flexibility of choice when it comes to
application appearance, this was a feature developed with **Tailwind CSS**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331275/SimpleChatimage/atdduwusy2uumksoe3wd.png)

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331286/SimpleChatimage/rbzcslfxwhx3iti7rvoe.png)

#### **Chat Pinning**

Chat pinning feature was enabled so as to allow users to keep
their favourite chat at the top of the chat list for easy reach,
this was achievable by using a **sorting algorithm**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331297/SimpleChatimage/xynewqhnaaf2yufmhji6.png)

#### **Chat Search**

Chat searching feature is integrated to allow users to search
for a past chat with a contact that may have gone down the chat
list, this was a feature developed through a **sorting algorithm**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331305/SimpleChatimage/x97h3pwm3a1udhytdrsp.png)

#### **New Private Chat**

This is a shortcut link created to enable user to start a new
chat with someone on their contact list, this was developed
using **Redux dispatch actions**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331312/SimpleChatimage/dza00yuwnd9vnl1eaeeh.png)

#### **Delete Chat**

Delete chat feature was integrated so users can get rid of past
chats they migh not be comfortable with or feel is now obsolete,
this was developed through the **server API and Redux dispatch actions**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331321/SimpleChatimage/afsre02h2tuhafbrzmnl.png)

#### **User settings**

User setting is enabled to allow user to change their profile
settings e.g Uploading a new profile picture, changing username
or uploading new bio status, this was achieved by using **Cloudinary** to store picture uploads, **server API** to make changes to user profile details

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331330/SimpleChatimage/qvuhw3hraiyt8fxxryiq.png)

#### **Contact List**

Contact list feature is integrated so users can go through all
the contacts they have and and event start a chat with them from
there by a click, feature was achieved through **Redux dispatch actions**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331350/SimpleChatimage/rizodmaw8jrrziywoxxt.png)

#### **Contact Search**

Contact search feature is enabled to allow users to search for
specific contact they would like to start a chat with, feature
was enabled through **sorting algorithms**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331364/SimpleChatimage/wgvqex84gkyft5xoqkhw.png)

#### **Add Contact**

Add Contact feature was enabled so users can create a new
contact for someone they just met or have known, feature was
achieved through **server API and Redux dispatch actions**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331380/SimpleChatimage/v0blv13m5qjqv8g0fv4c.png)

#### **Delete Contact**

We all have that menace on our contact list we would like to get
rid of, this feature was made just because of that through **server API and Redux dispatch actions**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331391/SimpleChatimage/ouzurhfcbjk1jxjy4lox.png)

#### **Contact Profile**

Contact profile checking feature is enabled to allow user to
check through contact profile to zoom in on their profile
picture and also see other details about them, this was mainly
achievable using **React dynamic rendering and Redux dispatch actions**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331409/SimpleChatimage/pqwblimxl7e3vcsrw8vr.png)

#### **Contact Online Status**

Contact online status is a feature enabled so user can see if
the contact is currently online and if offline when they logged
out of their app, feature was developed using **Socket.io** to dispatch online or online status in real-time and **MongoDB** to store user online or offline status

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331415/SimpleChatimage/ipmrqw8hrlxov3pgm5vu.png)

#### **Emojis**

Emoji feature was enabled to allow users to add fun interactions
during conversations, feature was enabled using the **React emoji picker library**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331425/SimpleChatimage/kfuv3wnxflzruztznptx.png)

#### **Voice recording**

This feature allows users to record audio and send them to
people, this feature was accomplished using **React media recorder library** to record audio from users and **Cloudinary** to store uploaded audio

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331434/SimpleChatimage/nudmbyhstrdifndfthpa.png)

#### **Delete Voice Recording**

This feature was enabled so as to allow users to delete voice
recordings they may not be comfotable with, this feature was
possible with **React media recorder library**

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331443/SimpleChatimage/tlcazh99gtjhubsrccdk.png)

#### **Send Photo**

This feature enables users to share photos while chatting, this
was made possible by using **Cloudinary** to store uploaded photos and **Socket.io** to share photo in real time

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331456/SimpleChatimage/xycahaixlks3rcmpx5dy.png)

#### **Calls**

This feature enables users to make voice or video calls, this
was achieved by using **Socket.io** to send call request to users in real-time and **WebRTC** to enable real-time media communication

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331467/SimpleChatimage/p6atm5jyh7hhlvw68uvg.png)

#### **Call Records**

This feature is integrated to allow users to see records of
calls they've been on and see their details, this was enabled
using **React** to display record and **MongoDB** to store record

![](https://res.cloudinary.com/simplechatapp/image/upload/v1699331475/SimpleChatimage/liry6vucqi2n97iw82fk.png)


### **Built with**

- React
- Redux
- Tailwind CSS
- Framer Motion
- Node js
- Express js
- Mongo DB
- Cloudinary
- Socket.io
- WebRTC

### **Requirements**

- Enabling authentication of users and giving them a unique
  identifier e.g a username for their account. This is needed for
  two reasons, so the server can distinguish all users and
  authenticate them correctly and also users can share this username
  with other users so that they can message them from their end,
  more like how we share our phone numbers with people that would
  eventually call us in the future the username serves that purpose.

- Storing user credentials in order to remember their session the
  next time they visit the website. This avoids the user having to
  login everytime they visit the app.
- Ensuring cross-browser compatibility of the app. This ensures the
  app has a consisitent behaviour and outlook on all browsers be it
  Google chrome, Mozilla firefox, Internet explorer, Safari and so
  on.

- Ensuring real-time updates of app so users can see instant
  messages, sent/delivered/read receipts, online/offline presence of
  contacts and also call requests from their conta

- Ensured web application was responsive to all screen sizes to
  optimize accessibility across multiple devices.

### **Available Scripts**

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will make changes only when you run the script again.\
Cd into client folder and run if you want to edit the react app, Read the md file in the client folder for more instruction.
#   S i m p l e C h a t  
 #   S i m p l e C h a t  
 # SimpleChat
