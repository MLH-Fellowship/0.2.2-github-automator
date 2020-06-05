
# First what is AWS Amplify

AWS Amplify is a development platform for building secure, scalable mobile and web applications. It makes it easy for you to authenticate users, securely store data and user metadata, authorize selective access to data, integrate machine learning, analyze application metrics, and execute server-side code. Amplify covers the complete mobile application development workflow from version control, code testing, to production deployment, and it easily scales with your business from thousands of users to tens of millions. The Amplify libraries and CLI, part of the Amplify Framework, are open source and offer a pluggable interface that enables you to customize and create your own plugins.

## Make sure you have Node installed and a AWS account

You need the Node if you don't have it yet, download it.
```
https://nodejs.org/en/download/
```
You also need an AWS account, go ahead and create one.
```
https://aws.amazon.com/
```

## AWS Amplify setup:

Install the AWS Amplify CLI:
```
$sudo npm install -g @aws-amplify/cli
```

Configure Amplify
```
$amplify configure
```
Just press enter for the specific region,username and continue.
Complete the AWS Amplify user creation, copy the user authentication keys and add the remaining information in the terminal.
Once you complete the Amplify setup, now let's build it.

React App
```
$cd 0.2.2-github-automator
```
This will initialize the AWS configuration
```
$amplify init
```
