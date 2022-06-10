# Dr Alex's Brain Training Game

Welcome to Dr Alex's Brain Training Game. Inspired by the classic Brain Trining game on Nintendo, taken to a whole new level!

To complete this using React for the main frontend development and Socket.IO to add WebSockets in order to implement the multiplayer functionanlity. The most up to date release can be found deployed at [this link](https://brain-training-website.sigmalabs.co.uk/lobby/play).
The game plays as a 4 option multiple choice, where the user is rewarded for answering questions more quickly than others.

## Contents

- [Objective](#Objective)
- [Gameplay](#Gameplay)
- [Our Team](#Contributors)

## Objective

The goal of this website was always fun! Players around the world should simply be able to have fun with eachother whilst sharpening their minds by completing quick fire maths questions. 
 <br/><br/>

Our first plan for the project was to make a game that would be a battle royale concept where players would be eliminated round by round.
However after some planning, as a group, we realised that our ambitions for the game were too big for the timeframe we had. <br />
We then made a decision to slightly alter the concept so that the players in the multiplayer game could still compete with eachother however there would be no battle royale, just a simple point system on which the winner would be decided. <br/>

This project was built with the Javascript coding language, using MaterialUI and some plain JSX to help flesh out the front end,
and using Socket.io to pass data between users' frontends for low-latency multiplayer gameplay.<br/>

The core features for the are:

- Registering a Player's account
- Logging into your Player account
- See a Leaderboard for all of the top scores
- View a set of rules just incase you arent aware of how to play
- Be able to view companies
- Customise your profile with a win message
- Customise your profile with our very own avatars
- Be able to chat to other players live
- Most importantly play the game in both singleplayer and multiplayer modes!


## Gameplay

### Landing Page 
<!-- 
<img width="1440" alt="Screenshot 2022-03-03 at 15 23 50" src="https://user-images.githubusercontent.com/94084605/156598252-3645c2d6-4bd8-47c7-810f-c5cbaac59560.png"> -->
The first page the user will be directed to will be the Homepage, where users can navigate through the website using the 4 main buttons on the screen. Th user also has an option to login using the header or register an account which can be navigated to inside the login page.
After submitting a username, the user is able to fully customise their profile using different avatar presets and set a win message that will display on all the players screens.

### Main Game
The first page the user will see is our homepage shown in the image below. The user can navigate throughout the hwole website through the homepage. In the top right corner, there is a small avatar representing the user profile navigation buttons. Clicking this will render a dropdown menu where you will have the option to login/register and when you are logged in the account you can navigate to the profile customisation page.

The top left corner is also a button, you can click the logo for the game to return to the homepage at any point throughout the website.

<img width="1080" alt="homepage" src="Screenshot 2022-06-09 at 16.21.18.png">

Entering Singleplayer here allows you to play the game fully. The user will have 15 seconds to answer a random math question and will have 4 options to choose from. If the user answers or has not answered the question within the time limit, before the next question renders, the user has the option to skip to the next question. Points are scored relative to the timeframe you answer them within and one game is 10 questions long. At the end of the game, the user is presented with their results and an option to post their score to the Leaderboard.
There is also an in-game song created specifically for the game, the music intensifies the closer you get to the end of the game!

### Singleplayer Page
Entering Singleplayer here allows you to play the game fully. The user will have 15 seconds to answer a random math question and will have 4 options to choose from. If the user answers or has not answered the question within the time limit, before the next question renders, the user has the option to skip to the next question. Points are scored relative to the timeframe you answer them within and one game is 10 questions long. At the end of the game, the user is presented with their results and an option to post their score to the Leaderboard.

<img width="1080" alt="Singleplayer game" src="Screenshot 2022-06-09 at 16.21.40.png">
<img width="1080" alt="singleplayer results page" src="Screenshot 2022-06-10 at 09.40.15.png">

### Multiplayer Page
The first page the user is greeted with once clicking mutliplayer is the lobby, in the lobby users have the option to chat to eachother and when to start the game. Starting the game will start the game for everybody waiting to play in the lobby. The user can also copy the link to the website to send to friends to access the game quickly.

 <img width="1080" alt="Multiplayer lobby" src=" Screenshot 2022-06-10 at 10.38.42.png">
 
Starting the game allows you to play the game alongside other users on the site. The user will again have 15 seconds to answer a random math question and will have 4 options to choose from. The highscore component on the page renders the user that has the highest points live in real time. Points are scored relative to the timeframe you answer them within and one game is 10 questions long. At the end of the game, the user is presented with a results results page that displays the users avatar, username, custom win message and final score. You do not have to be logged in to the website to play as seen below, the default character presets:

<img width="1080" alt="Multiplayer results" src="Screenshot 2022-06-10 at 10.34.12.png">

### Profile Customisation

<img width="1080" alt="profile customisation" src="Screenshot 2022-06-10 at 09.30.36.png">

## Technologies

"@emotion/react": "^11.9.0",
"@emotion/styled": "^11.8.1",
"@mui/icons-material": "^5.8.2",
"@mui/material": "^5.8.2",
"@mui/styled-engine-sc": "^5.8.0",
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^13.0.0",
"@testing-library/user-event": "^13.2.1",
"react": "^18.1.0",
"react-copy-to-clipboard": "^5.1.0",
"react-dom": "^18.1.0",
"react-router-dom": "^6.3.0",
"react-scripts": "5.0.1",
"socket.io-client": "^4.5.1",
"styled-components": "^5.3.5",
"use-sound": "^4.0.1",
"useref": "^1.4.4",
"web-vitals": "^2.1.0"
"cookie-parser": "^1.4.6",
"cors": "^2.8.5",
"dotenv": "^16.0.1",
"express": "^4.18.1",
"pbkdf2-password-hash": "^3.1.0",
"pg": "^8.7.3"

## Contributors
* [Thibaut Hucker](https://github.com/tibo8841)
* [Alex Convoy](https://github.com/agConvoy)
* [Kamilah Mohchin](https://github.com/KamCoder5)
* [Milan Patel](https://github.com/milanpat42)


<!-- <img width="1080" alt="Multiplayer results" src="Screenshot 2022-06-10 at 10.34.12.png">
<img width="1080" alt="chat component" src="Screenshot 2022-06-09 at 16.22.17.png"> -->
