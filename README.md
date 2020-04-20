# _Timed Flash Cards_

#### _Epicodus Week 6 Monday Project_

#### By _**KhanSahab**_ and _**Josh Hellman**_

## Description
_A trivia game where questions are generated with a timer that counts down, the question must be answered in the alloted time or the question is counted as answered incorrectly._


## Setup/Installation Requirements

* Clone the project and go in the root directory and type 
* npm install _to install dependencies_
* npm run start _to build it and have the website displayed_
* npm run lint _to see there are no errors_
* npm test to run the tests and see all of the test pass.

## Known Bugs

None. Js file calculates every thing correctly. Tests can be seen and the test file can also be see how it is testing.

## Support and contact details

_Have a bug or an issue with this application? email post_khan@yahoo.com_

## Technologies Used

Git and GitHub
JavaScript
jQuery
functions
NPM
Webpack
lintrc
WebpackHTML plugins
Jest and Babel.
JS classes


## Specs Input
| Spec | Input | result |
| :-------------  | :-----------------------------------------------------| :----------------------------------------|
| **build**  | User Input:"npm run start" | Output: "bundle.js and index.js are built inside dist dir" |
| **lint** | User Input: "npm run lint" | Output: "Shows it has zero erros. Shows identation warning"|
| **Test** | User Input: "npm test" | Output: "Six Tests are run and it shows all are passing"|
### **Test type 1 _Two tests testing this method_**  
##### Test Input to a method "yearsLeftPassed":        "yearsLeftPassed([10, 8, 6, 1], [30, 30, 30, 40]))"
##### Test Output: [[20, 22, 24, 39], ["left Mercury", "left Venus", "left Mars", "left Jupiter"]]
###### Explanation: Test output shows two arrays. First displays the difference between age and expected age on Mercury, Venus, Mars and Jupiters. Second Array displays the corresponding planets and whether year are left or the person has overlived his life on each planet.
### **Test type 2 _ Two tests passing parameters to class constructors and getting output from main method_**
##### Test Input to class constructors with age **less** than expectancy : "ageCalculator = new AgeCalculator(79, 90);"
##### Test Output from method ageCalculator.plAgesExpects(): ["329 45 left Mercury", "127 17 left Venus", "42 5 left Mars", "6 0 left Jupiter"]
###### Explanation: Output shows number of years, numbers of years left on each planet.

### **Test type 3 _ Two tests passing parameters to class constructors and getting output from main method_**
##### Test Input to class constructors with age **More** than expectancy : "ageCalculator = new AgeCalculator(90, 79);"
##### Test Output from method ageCalculator.plAgesExpects(): ["375 45 Overlived Mercury", "145 17 Overlived Venus", "47 5 Overlived Mars", "7 0 Overlived Jupiter"]
###### Explanation: Output shows number of years, numbers of years _**Overlived**_ and _not_ less on each planet.



### License


This software is licensed under the Epicodus inc license.

Copyright (c) 2020 **_Khan Sahab_**