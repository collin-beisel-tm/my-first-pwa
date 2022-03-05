# Budget Tracker Starter Code

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

 ## Table of Contents
  * [Links](#links)
  * [Description](#app-descriptino)
  * [Technologies Used](#technologies-used)
  * [Why I Built](#why-did-i-build-this-project)
  * [What I learned](#what-did-i-learn)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [User Story](#User-Story)
  * [Acceptance Criteria](#acceptance-criteria)

![Screenshot of Installed PWA](https://github.com/collin-beisel-tm/my-first-pwa/blob/main/screenshots/installed-pwa-screenshot.PNG)

## Links
 - Github Repo: https://github.com/collin-beisel-tm/my-first-pwa
 - Deployed Heroku App: https://agile-mountain-87033.herokuapp.com/
 ## App Description

Budget tracker is a Progressive Web Application that allows users to track their income and expense transactions both online and offline.

## Technologies used
- JavaScript
- Node.js
- Express.js
- MongoDb
- Mongoose
- IndexedDB
- Git/GitHub
- Heroku

## Why did I build this project?
I built this project as a bootcamp assignment. 

## What did I learn?
This project taught me how to convert a traditional app to a PWA using IndexedDB, service workers, and a web manifest.

## Installation
 - No install required for this one!
 - Navigate to the deployed application at https://agile-mountain-87033.herokuapp.com/ and enjoy!

## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## User Story
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

## Acceptance Criteria
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated