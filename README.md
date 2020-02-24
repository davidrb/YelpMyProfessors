# YelpMyProfessors
A RateMyProfessors-type clone for rating teacher effectiveness. UH Manoa edition.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1) Current Progress
A template which switches between states (in this case, pages) has been set up.
The Database schema has been designed.

## 2) Pending
- Home, Profile, and ProfessorProfile pages / page designs
- Implement a rating feature
- Get CRUD operations working for design functionalities

## 3) List of Team members and their next steps
Alice Chen - Connect to the MariaDB database, generate test data, get the search bar working with values in the DB, get basic CRUD operations working.
Sharie Mamuad - Design 
JiaQi Li - Design 

## Setup README

This project will not be hosted so a data dump of the SQL commands and test data will be included to setup a DB locally.

## To start the program
yarn install
yarn start

If you don't have yarn,
npm install -g yarn

## Git commands
### commiting changes
git add .
git commit -m "write message here"
git push origin branchName

### switch between branches
git branch -a
git checkout branchName

### merge branches
(First, switch into the branch you want to merge another branch with, example: I did git checkout alice-branch)
git merge master

(the merge with master only affects alice-branch)

## Useful commands
mysql -u root -p
mysql -u test -p
show databases;
use databaseName;
show tables;
GRANT ALL PRIVILEGES ON test.* TO 'test'@'localhost';
yarn add libraryName

## DB tables 
This project will be using a DB named test which instructions to run locally will be documented for (it will include test data as well).
Tables: Users, Profesors, Profiles, Ratings

Users(username, password, userId, firstName, lastName, email)
Professors(firstName, lastName, professorId, createdById)
Profiles(userId, gender, collegeYear, visibleYear)
Ratings(ratingId, userId, message, ratingVal, visibleName)


### Notes : 
- createdById is the same as userID in Users
- visibleName is a boolean which the user specifies when writing a rating to choose to display their name or not

- Professors have a 1:N relationship with Users (1 user can create as many Professor profiles as they want)
- Professors have a 1:N relationship with Ratings (1 professor can have many ratings)
- Users have a 1:1 relationship with Profiles (each user has 1 profile)
- Profiles have a 1:N relationship with Ratings (profiles each display the user's ratings and if Ratings.userId = Profiles.userId, display all ratings include ratings with boolean false in Ratings.visibleName)
