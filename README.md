# MyFakeTrip

## Introduction

- Name: MyFakeTrip
- Period: 2 weeks(2020.02.24 ~ 2020.03.06)
- Team: 3 Front-end, 2 Back-end
- Goal: Try to clone [myrealtrip website](https://myrealtrip.com) as similar in design and functionality as possible. When someone sees our webstie, make them confuse whether this is real or fake.

## Demo(Image Click)

[![마이리얼트립](https://k.kakaocdn.net/dn/t8jNH/btqCyndYMRG/kG3rxJjM6kM8wrwLzu8ZL0/img.png)](https://youtu.be/DQS73OiWkKM)

## Technologies

- Front-end: ReactJS, Sass, Slick
- Back-end: Python, Django, MySQL and etc ([Back-end Repo](https://github.com/wecode-bootcamp-korea/myfaketrip-backend))
- Deployment: AWS

## Features

### `Common`

- Fetch API(GET, POST, DELETE)
- Dynamic Routing (used Query parameters and URL parameters)

### `Sign-up / Sign-in`

- Bcrypt Encryption
- Get JWT Access Token from Back Server upon successful login

### `Main Page`

- Show products by using Slick Library
- Search Function(Ex: 바르셀로나)
- Wish-list Heart Feature only after Login

### `Product Page`

- Changing Nav-menu or moving to other location by Scrolling Function
- Photo Slider by Slider and Modal
- Google Static Map API through latitude and longitude from Back Server
- Comment Feature(Post, Update and Delete) by checking JWT and Authorization
