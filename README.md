# Rotten Peas

Rotten Peas is a site which allows the user to find podcasts from aroung the world using the [Gpodder API](https://gpodder.net). 

The site display Top 10 most popular podcasts from Gpodders subscription service. The user can pick any of them which will lead to a new tab being opened directing the user to Gpodder.net, where the podcasts and episodes are available.

## The brief

The objective was to create a podcast index which allows the user to search and easily find interesting podcasts in a simple and logic UI. The problem with existing apps and sites is that they have complicated interfaces and can be difficult to navigate.

### The features
The site allows the user to choose a podcast category or submit search query for a specific podcast. The site also has an option for the user to get a random podcast suggestion. 

There are 10 categories from which the user can choose. The categories are: BlogTalkRadio, Comedy, Games & Hobbies, Music, Occult, Pop Culture, Philosophy, Technology, TV & Film, Ubuntu. These are categories that I have chosen from Gpodders catalogue. There are many other categories available, many overlapping, and I made a choice to not include all categories.

### Frameworks used

Rotten Peas was created using Node.js, Express routes, restful API principles and rendering using Handlebars as template.
The site functionality is mainly down to DOM-manipulation. 

The site is styled using CSS.

### Potential features 

* Embedded podcast player that allows the user to listen directly without being directed to Gpodder
* Rating function that allows the user to rate a podcast and see other users rating of a particular podcast

### See it live

This project is deployed on heroku for free. This means that the connection isn't always awake; it will take longer to load than a page that is permanently awake. I appreciate your patience.

[Visit Rotten Peas](https://damp-beach-52514.herokuapp.com/)