# Show me the knowledge :)

Create an application that will have two screens (each on it's own route). 

## Home Screen (primary screen)
This screen will be the welcome screen, and will display some text "Hello, my name is [YOUR_NAME]". 
The text should be in its own component. The component should have an interval set that will change the colour of the text every second (use RxJS for this task).
Colours should be selected from a pool of 5 colours (hard-coded) randomly.

## Content Screen
This screen will display data retrieved from https://jsonplaceholder.typicode.com/posts.
Data received should be filtered so that only posts with an odd ID remain.
Data should also be modified so that the "title" property text value is all uppercase.

Modified data should be presented in the form of a list.
The list should comprise of two components, one for the list itself, and one for the items in it.

This screen should also contain a refresh button. By clicking on this button the data should be reloaded. 
(Note: if multiple clicks in rapid succession occur on the refresh button, only the last value returned should be used, other values should be discarded.)

## Style
You can either write your own CSS/SCSS, or you can use one of many CSS frameworks. The only requirement is that the application looks decent :). 

## Other
Create the project using Angular CLI. 

Write basic (unit) tests.

Utilize RxJs as much as possible. 

Once finished push the project to this repository (create a new PR) and request a review. 
