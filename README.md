# Tech-Blog

<a name="descsection"></a>
## Description
The purpose of this project was to create a full stack blog application.  This application features a MVC system in which the 

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
10. [ Video. ](#videosection)
11. [ Screenshots. ](#picsection)
12. [ Links. ](#linksection)
13. [ Resources/Credit. ](#creditsection)

<a name="usersection"></a>
## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

```

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/E-Commerce-Back-End.git
```
* Ensure you are in the current working directory
* Open terminal in working directory and type:
```
npm init
```
* Install dependencies (inquirer, mysql2, dotenv, and sequelize) by opening the terminal (ctrl + j on windows) and running:
```
npm install
```
OR each of the following:
```
npm install inquirer || npm install mysql2 || npm install dotenv || npm install sequelize
```

<a name="usagesection"></a>
## Usage
*  After following user installation guide above, open the database (db) folder in the integrated terminal and log onto mysql:
```
mysql -u root -p
```
* Enter mysql password and then SOURCE the schema file and then the seeds file (always SOURCE schema.sql first)
```
SOURCE schema.sql || SOURCE seeds.sql
```
* Open root folder in the integrated terminal and type in the following order:
```
npm run seed
npm run watch
```
* Open Insomnia and enter the correct HTTP method (i.e., GET, POST, PUT, or DELETE) and the correct URL.
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
  
  <a name="videosection"></a>
## Video
   Video Link: https://drive.google.com/file/d/19TGTg83lLx4pnruLmbYu221njSLdIGDm/view?usp=sharing

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of initiating MYSQL](./media/screenshot1.png)
  ![Screenshot of logging into MySQL](./media/screenshot2.png)
  ![Screenshot of initiating Index.JS](./media/screenshot3.png)

  <a name="linksection"></a>
  ## Links
  
  Github Site: https://github.com/laurelthorburn/Employee-Tracker

  <a name="creditsection"></a>
## Resources/Credit
* https://sequelize.org/master/manual/assocs.html
* https://sequelize.org/master/manual/model-basics.html
* https://sequelize.org/master/manual/legacy.html
* https://sequelize.org/master/manual/model-querying-basics.html
* https://docs.insomnia.rest/insomnia/environment-variables/




