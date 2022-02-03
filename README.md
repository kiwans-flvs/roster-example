# Roster Example

## Setup

### Angular CLI
You will need to have the Angular CLI installed globally on your system in order to run the Angular application

`npm install -g @angular/cli`

### API
ExpressJS API
#### To initialize and run the application
1. `cd api`
1. `npm install`
1. `node app.js`( http://localhost:3000 )

### UI
Angular Application
#### To initialize and run the application
1. `cd ui`
1. `npm install`
1. `ng serve` ( http://localhost:4200 )

## User Stories

### Defect #1
As an instructor  
When I attempt to send an email without typing anything in the message field  
Then I should be informed visually that the form is not filled out correct  

Currently, the page does nothing when clicking the Send button

### Defect #2
As an instructor  
When I view my list of students  
Then I should not see any blank rows  

Currently, the table shows an empty row and clicking the email button shows `To: undefined@flvs.net`

### Feature #1
As an instructor  
When I view my list of students  
Then I should be able to sort the students based on name, school, and grade  
So that I may find students more easily  

## Bonus User Stories

### Feature #2
As an instructor  
When I view my list of students  
Then I should have a way to quickly view their contact information ( email and phone number ) without having to go to the profile page  
So that I may reduce the number of clicks to view their contact information  

### Refactor #1
As a developer  
When working with API transactions in our Angular application  
Then I should set it up using NgRx  
So that the coding standard is consistent and other developers know how to follow the data  

Currently, the `EmailDialogComponent` directly calls the `EmailService`. This should be refactored to dispatch an NgRx action with the email and message which will trigger an NgRx effect to call the `EmailService`. We should have both a success and failure action that the effect will dispatch based on the response from the API and handle that in the `EmailDialogComponent`. The user experience should remain unchanged.
