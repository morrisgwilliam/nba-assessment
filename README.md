This project is using a vote + React template.

## Assessment
Goals

Please complete to the best of your ability
Required: TypeScript with tests
JavaScript should be able to run on Codepen or StackBlitz
Submit source files as .zip
Problem Statement
We deal with a lot of player and game statistics every day. Today there is a business need for us to look into how many first round and second round players there are for a given team. This data is important as it shows how the team has been performing with their player picks in the NBA draft. So, we are looking for a consolidated data to see how many players are from round 1 and round 2.

You can use https://www.balldontlie.io/#getting-started to find the documentation on the API you will need to use to successfully produce the results. You can sign up for the API Key with free tier. You should be able to run everything with the free version.

Please consider the following APIs to succeed in this assessment:

GET https://www.balldontlie.io/api/v1/players
GET https://www.balldontlie.io/api/v1/teams
The output needs to be similar to this:


    Team Name: Golden State Warriors
    Draft Rounds: {"1": 13, "2": 7, "null": 5}

## Prerequisites

### Install all node modules.

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Run tests

```bash
npm run test
```
