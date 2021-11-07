# softWhere?
softWhere is an app to help developers find cities that cater to their needs.

## Project Repo
[softWhere?](https://github.com/sarahrudy/i-wanna-live-there)
[softWhere API Repo](https://github.com/sarahrudy/i-wanna-live-there-api)

## Deployed Link


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
- 

Logan:
- 
---


## Evolution of softWhere
None of the team members on this project had ever worked with backend technologies when we began.  We decided on an idea for our app and did some individual research on how different front-end and back-end technologies communicate and work together.  We came together and worked together to practice creating an API that can visit web sites and scrape data and host that data.  This gave us a little more insight to how Express works and how to use Heroku to host an API.  We created the basic React component architecture and layout to use the data, then set out to create a database.  We chose to use Knex as our ORM/ query and builder.  It took quite a while to figure out the moving parts and which technology was responsible for which part of the process.  All of these technologies are meant to work together using Node/JavaScript but there was a lot of configuration and syntax to learn, not to mention the difficulty of debugging/ tracking errors between so many technologies.  Once we figured out how to control control our database using our Knex and express files we had to connect it to our API.  This was posed many more problems than we anticipated.  We ended up splitting up to research and try different methods and it took quite a bit of time.  Once we got the API and database working together properly we returned to this react app to display our data for a user to interact with.


## How to Use

- When the user loads the page they will see an input field to search for cities and a display of all available cities.
Home Page

- If the user wants to know more details about a particular city they can click directly on that city's image and the app will render a page with more details. 
- The detail page has various data (ex. cost of living, population, software dev salaries, cool things about that city etc.)  When the user wishes to return to the main page they can click the back button or go back in their browser.
City Details


- The user can search for a certain city using the search bar.
GIF of search functionality?


## Wins

- 

## Challenges

- Learning the responsibilites of each technology and the associated syntax.
- Connecting the PostgreSQL database to Heroku correctly.
- Debugging and tracking errors through the different technologies.

## Reflections

- 

## Future Additions

- We would like to be able to filter or rank cities based on an individual user and their preferences.
- We would like to be able to search based on specific details or categories.
- We would like a user to be able to save their favorite cities. 
