# Welcome to AutoGit

We’re AutoGit, a platform focused on providing an all-in-one overview of Pull Requests, Commits, and Issues for organizations (like the MLH Fellowship).

## Overview

AutoGit was created by William, YaHeng, and Kirby. We’re from Canada and the United States. With organizations like the MLH Fellowship, it focused on contributing to large open-sourced projects, we thought it would be a good idea to have an app that will keep tabs on all the activity that’s happening within the fellowship. The number of pull requests and code reviews might get out-of-hand as we heavily contribute for the next 12 weeks, so instead of digging through your Github notifications and emails, we make it simple to view everything all at once.

To put this in perspective, we created a lightweight application (which you can see here):
[insert showcasing demo]
Building this app came with several challenges such as encountering a rate-limiting issue from Github, our next steps would be to fully integrate the Github API into our platform so that we can scale this service and hopefully push it into production. Other features that we’ve been considering include deploying a Discord Bot that’ll enable you to create issues and comment directly from Discord.


## Technologies

AutoGit was created using SheetJS, AWS Amplify, and Docsify. We used SheetJS to display the tables of info and Docisfy to write up an onboarding guide for users. The service was hosted with AWS Amplify, which will provide the scalability that we need if we scale in the future. All of this was hosted via our Github Repo (link down here on the screen) where we used the features of Github like branches for individual features, creating issues of what needs to get done, and setting up pull requests when we need to merge features.

## Roles

For example, William was responsible for working with AWS Amplify and working with the Github API. That included tasks like making the API calls to fetch the data from Github, as well as setting up Amplify to work with our backend. YaHeng created all the tables with SheetJS and worked on the UI layout, which included tasks like building the filtering functionality and export options. Kirby worked on the documentation and deployment with Docsify and Amplify, which includes creating the user manual and serving our documentation through Amplify.

## Thank you
We’re in a time where remote collaboration and productivity tools are used more than ever, and with AutoGit, we hope to declutter your inbox of Github notifications and provide a minimalistic view of everything that you need to get done.

## Contribute and Setup

Here are the links on how to [contribute](https://github.com/MLH-Fellowship/0.2.2-github-automator/blob/master/contributing.md) and [setup](https://github.com/MLH-Fellowship/0.2.2-github-automator/blob/master/setup.md).