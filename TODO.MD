# Snippet

## To do

- [x] transfer backend to ts
- [x] fix server deploy

  - https://dev.to/tirthpatel/deploy-node-ts-express-typescript-on-vercel-284h
  - https://github.com/lleryo/expressjs-vercel-starter/tree/main

- [x] space event listener not working sometimes, happends when last quote = first new quote
- [x] add loading circle when currentQuote = null
- [ ] design and plan out features

### Setup

- [x] Transfer to MongoDB Atlas
- [x] Deploy frontend to Vercel
- [x] Deploy backend to Vercel
- [x] Jest testing working
- [x] Github Actions https://docs.github.com/en/actions/quickstart
- [x] Playwright https://playwright.dev/docs/ci-intro

## Features

- [] User Authentication

User Schema

- username
- email
- password
- isGuest
- quotes
- tags

- Quotes tab
  List of all users quotes

Quote schema

- text
- author
- source
- tags

-Tags tab
List of all users tags

Tag schema

- name
- quotes

Theme Schema

-
