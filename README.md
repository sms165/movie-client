# movie-client

## Hosted version
https://myflix-moviedb.netlify.app
username: tester
password: password
## Description
This project is using React to build the client-side for an application called femmovies based on its existing server-side code (REST API and database).

### What technology usage and why?

For the frontend of my femmovies application I chose **React**. The main reasons are
* type of application: I need a library helping me build the UI of my app. React is suited best for the view side of the mvc approach and its virtual DOM ensures faster rendering of views
* scope: The component-based nature of React allows me to increase the scope of my web application with little to no performance issues or concerns about entropy.
* good documentation: for a beginner like me, it is important that the tools I use are well documented, so that I can understand the different components I work with. Another factor in my decision was, that it is kept up to date. In case of a library developed and maintained by Facebook, that is not a problem.
* popularity: React is in high demand at the moment. This can be seen in job ad, the stars on GitHub (187k) as well as the contributions to stack overflow. This support in the developer community ensures that Il will eventually find solutions when troubleshooting.

* mobile version: with its associated ecosystem of tools, React is also a good springboard for my next project, where I want to use React Native for a mobile application. So getting familiar with React first is valuable.

As a build tool I used **Parcel**, because it
* requires minimal configuration
* has fast bundle times
* is well-documented
* actively maintained
* works automatically with a variety of files
* offers some very useful features, such as building and serving code. Very helpful is also that it refreshes the browser every time the code changes (support for React Fast Refresh)

### Key features

Main view
* Returns a list of ALL movies to the user (each listed item with an image, title, and
description)
* Sorting and filtering
* Ability to select a movie for more details

Single movie view
* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites

Login view
* Allows users to log in with a username and password

* Registration view
* Allows new users to register (username, password, email, birthday)

Genre view
* Returns data about a genre, with a name and description
* Displays example movies

Director view
* Returns data about a director (name, bio, birth year, death year)
* Displays example movies

Profile view
* Allows users to update their user info (username, password, email, date of birth)
* Allows existing users to deregister
* Displays favorite movies
* Allows users to remove a movie from their list of favorites

Single movie view and all movies views
* Allow users to see which actors star in which movies
* Allow users to view more information about different movies, such as the release date and the movie rating

### What challenges did I face, what did I learn? 

* There is a new version of react-router-dom (6.3.0) which differs significantly from the version used by CF (v.5.3.0). I had to rely on documentation and online resources as I did not want to downgrade.
* I wanted the password change ability to more secure in having the user type in their old and new password. The old password then is compared with the one in the database to make sure it is correct.
* I also added more views and other functionalites to get more experience and practice.

### ... as a developer, who wants to work with the project
1. Clone or download repository ...
```bash
git clone https://github.com/F3NJ0/movie_api.git
```

2. Run parcel to build
```bash
parcel src/index.html
```

## Technical Requirements (according to project brief)
* SPA application built using React
* Navigate between views using react-router-dom
* Use Parcel as build tool
* Use react-bootstrap for UI
* Use React Redux for state management (respecting the Flux pattern)
* Use both class and function components
* Use axios to connect to API (providing user and movie information)
