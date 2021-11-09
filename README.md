![softwhere](https://user-images.githubusercontent.com/78389005/140847121-2bd5e432-bca0-46f7-a761-3d5b375b3525.gif)

# softWhere?
`softWhere?` is an interactive web application that has a list of the top 20 cities for software developers to explore so they can find a city that caters to their needs. This project was part of an assignment where we were given the freedom to choose a new technology none of us had tried before. The goal of the project is to really push students to research and explore on our own and exhibit our ability to learn and apply new technologies quickly. We chose backend as our stretch technology so we first built an API using Node, Express, PostgreSQL, Knex, and Heroku, then we built `softWhere?` using React. 

`softWhere?` allows a user to search cities through a live search function to display cities on the page. After a user clicks on a city they're interested in, they are redirected to a page that displays specific information on that city including the city population, software developer jobs available, the median income for a software developer in that area, etc. 

## API Repo
Check out the API repo we built first below:
[softWhere API Repo](https://github.com/sarahrudy/i-wanna-live-there-api)

## Deployed Link
(add deployed website link)

## Contributors
- [Elise Beall](https://github.com/elisebeall)
- [Sarah Rudy](https://github.com/sarahrudy)
- [Logan Vincent](https://github.com/Logandv3)


## Technologies Used
* Created with [Create React App](https://github.com/facebook/create-react-app)
* Code: JavaScript, Express.js, Knex.js, Node.js, PostgreSQL, ReactRouter
* Testing: Cypress
* Compiler: Webpack
* Linter: eslint
* Debugging: Chrome Dev Tools
* Version Control/Management: Git/Github/Github Projects
* Stretch Technologies: Node, Express, PostgreSQL, Postico, Knex, Postman, Heroku


## Setup
- Fork this web app to your own Github account
- Clone the repository to your local machine
- `cd` into the file
- run `npm install`.
- Run `npm start` and visit `localhost:3000`


## Learning Goals
Team Goals:
- Incorporate new technologies to practice self learning 
- Create a functional API and database
- Test user flow and API requests
- Create a multi-page UX using Router
---
Elise:
- 

Sarah:
- Learn how to build a backend API

Logan:
- 
---


## Evolution of softWhere
None of the team members on this project had ever worked with backend technologies when we began.  We decided on an idea for our app and did some individual research on how different front-end and back-end technologies communicate and work together.  We came together to practice creating an API that can visit web sites and scrape data and host that data.  This gave us a little more insight to how Express works and how to use Heroku to host an API.  We created the basic React component architecture and layout to use the data, then set out to create a database.  We chose to use Knex as our ORM query and builder.  It took quite a while to figure out the moving parts and which technology was responsible for which part of the process.  All of these technologies are meant to work together using Node/JavaScript but there was a lot of configuration and syntax to learn while debugging/ tracking errors between so many technologies.  Once we figured out how to control our database using our Knex and Express files, we had to connect it to our API. Once we got the API and database working together properly we returned to this React app to display our data for a user to interact with.


## How to Use
- When the user loads the page they will see an input field to search for cities and a display of all available cities.
- If the user wants to know more details about a particular city, they can click directly on that city's image and the app will render a page with more details. 
- The detail page has various data (ex. cost of living, population, software dev salaries, cool things about that city etc.)  When the user wishes to return to the main page they can click the back button or go back in their browser.
- The user can search for a certain city using the search bar.


## Wins
- Overcame people telling us how difficult it would be and successfully built an API
- Ability to speak on these new technologies
- Learned a ton in the process 


## Challenges
- Learning the responsibilites of each technology and the associated syntax.
- Connecting the PostgreSQL database to Heroku correctly.
- Debugging and tracking errors through the different technologies.


## Future Additions
- Filter or rank cities based on an individual user and their preferences
- Search based on specific details or categories
- Save favorite cities
