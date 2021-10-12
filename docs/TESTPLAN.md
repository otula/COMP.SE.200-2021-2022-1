\
\
\
\
\
\
\
\
\
<br>
# TESTPLAN <!-- omit in toc -->
## Course ID: COMP.SE.200-2021-2022-1 Software Testing
\
\
\
\
\
\
Diyaz Yakubov H298010
\
Sang Nguyen
\
\
<br>

<div style="page-break-after: always;"></div>

# Table of contents <!-- omit in toc -->
- [Definitions, acronyms and abbreviations](#definitions-acronyms-and-abbreviations)
- [Introduction](#introduction)
  - [Context](#context)
- [Test environment](#test-environment)
- [Test cases](#test-cases)
  - [Functions to test (TODO: refine it!)](#functions-to-test-todo-refine-it)
  - [What functions do not test](#what-functions-do-not-test)
  - [Test results](#test-results)
  - [Agreed error classification or categorization](#agreed-error-classification-or-categorization)
  - [Common understanding of term "PASSED"](#common-understanding-of-term-passed)
- [References](#references)

# Definitions, acronyms and abbreviations
<!-- List of any definitions, acronyms and abbreviations used in the document. -->
* VS Code - [Visual Studio Code](https://code.visualstudio.com/) is a code editor.
* QA - Quality Assurance

# Introduction
<!-- Short introduction to the contents of the document. 
What is in the document?
What is the purpose of the document? -->
This document aims to show how to approach testing of the library in a more efficient and predictive way. The document is made of 5 main sections, which are 
- [Definitions, acronyms and abbreviations](#definitions-acronyms-and-abbreviations) - contains all definitions, acronyms and abbreviations.
- [Introduction](#introduction) - introduction to the document
- [Test environment](#test-environment) - describes tools, packages, libraries, etc. of the environment. It also contains a diagram that shows the relationship between those. Basically, it gives an answer to the question: "Where to test?".
- [Test cases](#test-cases) - this part answers to following questions: "What to test?", "How to test?", "How to evaluate?"
- [References](#references) - contains all cites. 
   
The document is prepared for QA engineers (testers) to give them a good basement to start maintaining and improving the library. It contains a vital minimum of test cases so that a team may ensure that the quality of the library would not deteriorate drastically.  
It is always worth knowing the domain of the library under test. [Context](#context) subsection is highly recommended to read first. 
## Context
The library is meant to be used in a front end application built with React. React promotes functional programming and composition over inheritance.

The application is an E-commerce store selling food products from various small producers. Users can search products by category, price, producer and various other criteria. Products can be added to a shopping cart. Shopping cart automatically updates and shows the total price. Checkout process is handled with a third-party solution.

The food producers can add their products via a previously created portal. The producers can leave some fields blank if they do not want to specify some attributes like category or calories. It has been decided that the store front end is responsible for handling these missing values. Front end is also responsible for making sure that the product descriptions look similar i.e. the first word of a sentence starts with an upper-case letter and that prices are shown with two decimal accuracy.

# Test environment
<!-- Description of the chosen tools, packages, libraries, etc. including possible links to web sources (tutorials, homepages, etc). 
Why these tools were chosen? 
A (UML) diagram of your test setup. The diagram can be an activity or sequence diagram, which ever feels more natural. The diagram can be high-level (abstract), but it should illustrate how your test setup should work and how the chosen tools should interact with each other. -->
Mocha[[3]](#references) + chai[[4]](#references), Travis CI (CI pipeline)[[5]](#references) and Coveralls[[6]](#references)  
Draft version of sequence diagram. TODO: in order to make a right sequence I need to get grasp how CICD+coveralls+nodejs work together.
![](../out/docs/testing_sequence/Testing%20Sequence%20(WIP).png)



# Test cases
<!-- What kind of tests are to be performed (unit, integration, ...) ? 
What parts of the library are to be tested and what aren't? 
Are any functions or components excluded from testing? Why?
How the test results will be documented?
If bugs or issues are found, how are they classified or categorized?
When the tests are considered "passed"? -->
As far as it is a library, and its functionality is quite limited, we assume that glass box testing methods should be enough to ensure the quality of this library. Particularly, unit testing and integration testing should be implemented. In order to be successful and fit in a timeframe, the team should focus on testing the most essential parts of the library.
## Functions to test (TODO: refine it!)
In order to maximize test coverage with only 10 source files, the team decided to use analytical approach that complements the decision process. Basically, visualizing dependencies between given functions shows a clear picture of what the most used functions are. If tests cover these 10 essential files, it will mean that N% (will check the number after test coverage measuring) of a code base is tested and 'insured'. Dependency Graph[[1]](#references) and Dependency Cruiser[[2]](#references) VS Code extensions were used as dependency visualizing tools. The results of visualisation are shown bellow. 
![Dependency Graph View](../.dependencygraph/dependencygraph.UmaUIE3u.svg)  
![Dependency Cruiser View](Screenshot%202021-10-03%20at%2019.03.19.png)
Based on given graphs, the team found out that next functions are met criteria:
- countBy
- ~~difference~~
- ~~get (??? not sure)~~
- ~~keys~~
- reduce
- drop*
- isArrayLikeObject*
- chunk
- toInteger
- isEmpty
- isSymbol
- isArrayLike
- isArgument

`*` - shows that a function and all its dependencies are fully testable, it doesn't have deps from `.internal`  

## What functions do not test 
Other functions are excluded from test cases because there are not enough resources to test all cases. Probably, they might be covered during evolving of the library. Moreover, the code under `.internal` folder is fully exempted from the testing because it is out of the team's duties (`.internal` is owned by LimPoPo team).  

## Test results
TODO: probably after investigating Travis CI (CI pipeline) and Coveralls

## Agreed error classification or categorization
TODO: elaborate this part 

## Common understanding of term "PASSED"
TODO: elaborate this part, maybe refer to DoD


# References
<!-- List of any and all references used in the document. -->
  [1] https://marketplace.visualstudio.com/items?itemName=sz-p.dependencygraph  
  [2] https://github.com/juanallo/vscode-dependency-cruiser  
  [3] https://mochajs.org/  
  [4] https://www.chaijs.com/  
  [5] https://www.travis-ci.com/  
  [6] https://coveralls.io/  


  