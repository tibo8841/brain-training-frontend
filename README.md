# Dr Alex's Brain Training Game

Welcome to Dr Alex's Brain Training Game. Inspired by the classic Brain Trining game on Nintendo, taken to a whole new level!

To complete this using React for the main frontend development and Socket.IO to add WebSockets in order to implement the multiplayer functionanlity. The most up to date release can be found deployed at [this link](https://brain-training-website.sigmalabs.co.uk/lobby/play).
The game plays as a 4 option multiple choice, where the user is rewarded for answering questions more quickly than others.

## Contents

- [Objective](#Objective)
- [Gameplay](#Gameplay)
- [Our Team](#Our-Team)

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

<!-- <img width="1432" alt="Screenshot 2022-03-03 at 13 21 21" src="https://user-images.githubusercontent.com/94084605/156599321-ae89e2b3-d7f2-4d52-bc8d-559e70efb5e4.png"> -->

Entering Singleplayer here allows you to play the game fully. The user will have 15 seconds to answer a random math question and will have 4 options to choose from. If the user answers or has not answered the question within the time limit, before the next question renders, the user has the option to skip to the next question. Points are scored relative to the timeframe you answer them within and one game is 10 questions long. At the end of the game, the user is presented with their results and an option to post their score to the Leaderboard.
///////////////////////////////////////////

<img width="1440" alt="Screenshot 2022-03-03 at 15 24 37" src="https://user-images.githubusercontent.com/94084605/156601064-3f9171be-9a52-4d91-8614-e5226695e60b.png">
<img width="1440" alt="Screenshot 2022-03-03 at 15 25 26" src="https://user-images.githubusercontent.com/94084605/156601097-9660e33c-467e-4538-bf06-44c36219b58a.png">
<img width="1440" alt="Screenshot 2022-03-03 at 15 26 53" src="https://user-images.githubusercontent.com/94084605/156601137-16bc1de6-cef1-47c8-8881-76920bd60091.png">
<img width="1440" alt="Screenshot 2022-03-03 at 15 30 03" src="https://user-images.githubusercontent.com/94084605/156601163-09cec02b-316b-42ea-87a2-df264fb67eee.png">

### Results Page

<img width="1440" alt="Screenshot 2022-03-03 at 16 34 37" src="https://user-images.githubusercontent.com/94084605/156609216-b5dcd9c7-7912-4afe-937b-a9b4d09fb80c.png">

## Assets

* Mountain Model - https://www.cgtrader.com/free-3d-models/exterior/landscape/mountainwithtress
* Pedestal - https://sketchfab.com/3d-models/doric-twist-pedestal-7936fc9cbb6547459bfecb20910281ec
* Audio SFX - https://www.zapsplat.com/

## Technologies

* react-three/cannon @4.7.0
* react-three/drei @8.10.6
* react-three/fiber @7.0.26
* react-three/xr @3.4.0
* use-gesture/react @10.2.6
* date-fns @2.28.0
* react @17.0.2
* react-spring @9.4.3
* three @0.137.5

## Contributors
* [Kiran Aatkar](https://github.com/kiranaatkar)
* [Omar Shueb](https://github.com/Omar-Shueb)
* [Tamoor Waheed](https://github.com/TamoorW)
* [Tom Waghorn](https://github.com/tomw13)
