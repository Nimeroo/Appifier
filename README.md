# Game Station

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Game Station** allows the user to post their opinions on different games that they have played. New users are able to see a list of games. Once they have clicked on a game they are intertested in, additional information and comments that other users have posted on that game will be available to them. Once the user registers and logs in they will be able to create, edit, and delete comments that they have made on that specific game._



<br>

## MVP

- Renders list of game titles on home
- User register and login
- Comments page for each game rendering on click
- User ability to create comments on games


<br>

### Goals

- _Full CRUD_
- _Account Registration_
- _Login and logout functionality_
- _Render's the different games on homepage_
- _Ability to create, edit and delete comments on games and render those comments on each game page_

<br>

### Libraries and Dependencies

|     Library      | Description                                        |
| :--------------: | :------------------------------------------------- |
|      React       | _Frontend library used to render the backend._     |
|   React Router   | _Used to define routes inside of the application._ |
|      Rails       | _Used to run the backend servers and store data._  |
|      Faker       | _Used to fill tables with data to render on page._ |

<br>

### Client (Front End)

#### Wireframes

![Desk Home](https://i.imgur.com/CEGnQUw.png")

- Desktop Home

![Desk Details](https://i.imgur.com/rOTdDCi.png")

- Desktop Details and Comments

![Desk Logged In Details](https://i.imgur.com/cGwothN.png")

- Desktop Logged In Details and Comments

![Desk Create](https://i.imgur.com/PeU9WYn.png")

- Desktop Create Post

![Desk Register](https://i.imgur.com/v7bBCOr.png")

- Desktop Sign-Up

![Desk Login](https://i.imgur.com/MOXNIQg.png")

- Desktop Login

![Mobile Home](https://i.imgur.com/YPG3Gu6.png")

- Mobile Home

![Mobile Details](https://i.imgur.com/IqfDVnx.png")

- Mobile Details

#### Component Tree

[Component Tree Sample](https://i.imgur.com/kN7f75E.png")

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Layout.jsx
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Games.jsx
      |__ Comments.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ user.js
      |__ games.js
      |__ comments.js
|__ screens/
      |__ GamesHome.jsx
      |__ GameComments.jsx
      |__ CommentCreate.jsx
      |__ CommentEdit.jsx
      |__ Login.jsx
      |__ SignUp.jsx
      


```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                    | Priority | Estimated Time | Time Invested | Actual Time   |
| ----------------------- | :------: | :------------: | :-----------: | :-----------: |
| Create Layout.jsx       |    L     |     1 hrs      |     TBD       |     TBD       |
| Create Nav.jsx          |    L     |     1 hrs      |     TBD       |     TBD       |
| Create Footer.jsx       |    L     |     1 hrs      |     TBD       |     TBD       |
| Create Games.jsx        |    L     |     2 hrs      |     TBD       |     TBD       |
| Create Comments.jsx     |    L     |     2 hrs      |     TBD       |     TBD       |
| Create GamesHome.jsx    |    H     |     3 hrs      |     TBD       |     TBD       |
| Create GameComments.jsx |    H     |     3 hrs      |     TBD       |     TBD       |
| Create CommentCreate.jsx|    H     |     3 hrs      |     TBD       |     TBD       |
| Create CommentEdit.jsx  |    H     |     3 hrs      |     TBD       |     TBD       |
| Create Login.jsx        |    H     |     4 hrs      |     TBD       |     TBD       |
| Create SignUp.jsx       |    H     |     5 hrs      |     TBD       |     TBD       |
| Create services         |    H     |     5 hrs      |     TBD       |     TBD       |
| TOTAL                   |          |     37 hrs     |     TBD       |     TBD       |


<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://ibb.co/vm94hnL)
<br>

***

## Post-MVP

- Game searchability
- Likes table which puts comments with more likes at the top of the comments
- Comments to be under the catagories of positive and negative comments
- Profile page for users
- Users being able to comment on comments

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
