# Tech-Blog

<a name="descsection"></a>
## Description
The purpose of this project was to create a full stack blog application.  This application features a MVC system utilizing Node.JS, MySQL, Sequelize, bCrypt, Express, Expression-Sessions, Express-Handlebars, and more. The user is able to access the homepage but is prompted to login/sign-up in order to view individual posts and their comments, create their own posts and comments, and edit or delete their posts. In addition, the user is automatically signed out if the site is left on idle for a preset amount of time.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
1. [ Description. ](#descsection)
2. [ User Story. ](#usersection)
3. [ Acceptance Criteria. ](#acceptancesection)
4. [ Installation. ](#installsection)
5. [ Usage. ](#usagesection)
6. [ License. ](#licensesection)
7. [ Contributing. ](#contribsection)
8. [ Tests. ](#testsection)
9. [ Questions. ](#questionssection)
10. [ Screenshots. ](#picsection)
11. [ Links. ](#linksection)
12. [ Resources/Credit. ](#creditsection)

<a name="usersection"></a>
## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/Tech-Blog.git
```
* Ensure you are in the current working directory
* Open terminal in working directory and type:
```
npm init
```
* Install dependencies (bcrypt, connection-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, and sequelize) by opening the terminal (ctrl + j on windows) and running:
```
npm install
```
OR each of the following:
```
npm install bcrypt || npm install connection-session-sequelize ||  npm install dotenv || npm install || express npm install express-session || npm install express-handlebars || npm install mysql2 || npm install sequelize
```

<a name="usagesection"></a>
## Usage
*  After following user installation guide above, open the database (db) folder in the integrated terminal and log onto mysql:
```
mysql -u root -p
```
* Enter mysql password and then SOURCE the schema file
```
SOURCE schema.sql
```
* Open root folder in the integrated terminal and type in the following order:
```
npm run seed
npm run dev (only works if nodemon is installed)
```
* Open your localhost:3001 
* Enjoy!

<a name="licensesection"></a>
## License
Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  <a name="contribsection"></a>
## Contributing
  
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

  <a name="testsection"></a>
## Tests
  No tests are available at this time.

  <a name="questionssection"></a>
## Questions?
  Want to see more of my work? [Click here!](https://github.com/laurelthorburn)

  Questions/comments/concerns? Please send an email to codinglaurel@gmail.com

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of initiating MYSQL](./media/screenshot1.png)
  ![Screenshot of logging into MySQL](./media/screenshot2.png)
  ![Screenshot of initiating Index.JS](./media/screenshot3.png)

  <a name="linksection"></a>
  ## Links
  
  Deployed Heroku Site: https://laurels-tech-babble.herokuapp.com/

  Github Site: https://github.com/laurelthorburn/Tech-Blog

  <a name="creditsection"></a>
## Resources/Credit
* https://www.npmjs.com/package/express-session
* https://www.npmjs.com/package/connect-session-sequelize
* https://www.npmjs.com/package/express-handlebars
* https://www.npmjs.com/package/bcryptjs
* https://eslint.org/
* https://learn.co/lessons/node-js-intro-to-handlebars
* https://stackoverflow.com/questions/39031224/how-to-center-cards-in-bootstrap-4
* https://getbootstrap.com/docs/4.0/components/card/#border
* https://sequelize.org/master/manual/eager-loading.html
* https://stackoverflow.com/questions/44878624/node-js-handelbars-error-missing-helper-compare
* https://www.youtube.com/watch?v=uA9rxsezo24&t=515s&ab_channel=FutureStudio
* https://stackoverflow.com/questions/41993759/cant-get-username-from-req-user-to-output-in-express
* https://stackoverflow.com/questions/16434893/node-express-passport-req-user-undefined
* https://stackoverflow.com/questions/58015788/how-to-get-posts-by-member
* https://stackoverflow.com/questions/69439929/node-js-app-not-deploying-correctly-on-heroku
* https://www.titanwolf.org/Network/q/1a7d3de8-97ea-4071-bb2e-029551021878/y
* https://www.geeksforgeeks.org/express-js-res-json-function/
* https://stackoverflow.com/questions/17499742
* how-do-i-add-console-log-javascript-logic-inside-of-a-handlebars-template





