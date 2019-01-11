# Bellwether Vue [![codecov](https://codecov.io/gh/ryanbenson/Bellwether-Vue/branch/master/graph/badge.svg)](https://codecov.io/gh/ryanbenson/Bellwether-Vue) [![Build Status](https://travis-ci.org/ryanbenson/Bellwether-Vue.svg?branch=master)](https://travis-ci.org/ryanbenson/Bellwether-Vue) [![DeepScan grade](https://deepscan.io/api/teams/2585/projects/3984/branches/33531/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=2585&pid=3984&bid=33531)

✨ Finding that one person who's on top of it, that's the key 🙋

## Set Up

There's a couple of things to do before you can use this. But it's simple enough.
Make sure that you have Node installed, this is leveraging JavaScript/Node.

`I'm using Node 8.9.x, but it will probably work well in later releases`

- Run `npm install` to install the dependencies
- Create a `.env` file in the root directory
- Update the keys in the `.env` file
- It will automatically pull in any ENV VARS prepended with `VUE_APP_` so the
  key will get pulled in when you are in local and if it's built
- 🍺

## Objectives

Using [Traackr](http://www.traackr.com/), we're going to list the people who are prime to be connected with to benefit our brand, and benefit them in return! It will also allow you to dive into their individual profile information as well.

### Searching

You'll be able to enter in as many keywords are you want, and also be able to remove ones you no longer wish to use in your search.

We are limiting the search results to 25 initially, but if you want to see more people, just keep going!

You'll be able to sort too!

- Name
- Reach
- Resonance

### Easy to use!

A major goal is to make this as easy to use as possible. It will be snappy, responsive, and informative. So it should work to fit your needs on desktop or mobile

## Design

I created a mini style and component guide. [Review the design](https://www.figma.com/file/ZHKWHUPHbp02Ho3KmOh2uiYu/Bellwether?node-id=9%3A0)

## Commands

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```
