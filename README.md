# ASTROVERSE

# Phase 2 project 

## Table of contents

-   [Overview](#overview)
    -   [Intro](#intro)
    -   [The challenge](#the-challenge)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [Features](#features)
-   [Setup](#setup)
-   [Useful resources](#useful-resources)

## Overview

### Intro

Hello! This is my asronomy based project. This is my first project built with **_React JS_**. I had the opportunity to try _styled-components_. It is a very powerful tool, but I believe it takes time to learn good practices and organize the code. Right now, I have the feeling that my styles are chaotic but I'm looking forward to correct it and use styled-components to its full potential. In order not to stick to design, I decided to recreate the animated solar system as the home page. Additionally, I added transitions while the subpage/route change.
## My process
### Built with
-   ReactJS
-   JavaScript
-  NASA api
-   Framer Motion API

### Features
-   I used **_ReactJS_** library to create an app. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
-   I tried to write a project using **_styled-components_** library. Styled Components are one of the new ways to use CSS in modern JavaScript. It is the meant to be a successor of CSS Modules, a way to write CSS that's scoped to a single component, and not leak to any other element in the page. Also allows you to write plain CSS in your components without worrying about class name collisions.
-   The first time I used **_Prettier_**. Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.
-   To animate the pages transitions and mobile-menu animations I used **_Framer Motion API_**. Framer Motion is an open source, production-ready library that's designed for creating creative animations.
-   Added `counter()` function for my _pseudo-elements_ content in _Tab button_. **CSS counters** let you adjust the appearance of content based on its location in a document. For example, you can use counters to automatically number the headings in a webpage.
-   Implemented **_defer_** to my script tag. The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.
-   Implemented `prefers-reduced-motion` CSS media feature which is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses. Prevent animations in brief.


Use npm to build and compile assets in a local environment:

```
$ npm run build
```

Watch assets for changes and rebuild your bundle each time you update a file with:


## Useful resources

-   [DOCS - ReactJS](https://reactjs.org/)
-   [VIDEO - ReactJS tutorial by The Net Ninja](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
-   [LINK - Styled-components](https://styled-components.com/)
-   [LINK - Prettier](https://prettier.io/)
-   [LINK - Framer Motion API](https://www.framer.com/api/motion/)
-   [VIDEO - CSS Counters](https://youtu.be/0gayskscLY4?t=355)
-   [DOCS - CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
-   [LINK - Solar system](https://codepen.io/kowlor/pen/ZYYQoy)
-   [LINK - async/defer](https://flaviocopes.com/javascript-async-defer/#the-position-matters)
-   [LINK - webpack](https://laravel-mix.com/docs/6.0/what-is-mix)


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

