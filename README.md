## WiCS Website

**Checkout the live website: [wics.uwaterloo.ca](http://wics.uwaterloo.ca/)**

### Getting Started

1. Clone the project by running: `git clone https://github.com/wics-uw/website-v2.git`
2. Run `yarn install` in the project directory to install all the packages
3. Run `yarn start`, you will be able to view the website on http://localhost:3000


### Deployment Steps

1. Make sure you have an account with CSC. (If you do not have one, contact CSC to create one for you and give you access to `wics`'s server. 

2. Once you have a CSC account setup, you should be able to `ssh` into their servers. 
For example, in your command line, run 
```
ssh yourwatid@caffeine.csclub.uwaterloo.ca
```
It will prompt you to enter your password immediately. 

3. You should now be in your own folder, navigate to the `wics` folder by running 
```
cd ../wics
```
4. Change your role to become a `wics` user which gives you persmission to change stuff in the `wics` folder
```
become_club wics
```
5. In the `wics` folder, `www_backup` is the old website, `www` is the new website that is live on [wics.uwaterloo.ca](http://wics.uwaterloo.ca/), `website-v2` is the project on github. 
All that needs to be done for the build process is run the script `update-website.sh` once all the changes are pushed onto Github and merged with the master  
```
./update-website.sh
```

6. Navigate to the website [wics.uwaterloo.ca](http://wics.uwaterloo.ca/), all changes should be live! 


### Development Tips

#### Naming Convention

- For new features: `initial/feature/ticket#`, the ticket # will be the Jira ticket that you are working on

#### Pull Requests & Commits

- Always write a descriptive commit message in the following format: `ticket#: description`
- Write a detailed, but not overly detailed description of the feature or bug fixes when creating a PR

#### Troubleshooting
- If you run into this bug while trying to start the website `Error: error:0308010C:digital envelope routines::unsupported` try use this as a fix `export NODE_OPTIONS=--openssl-legacy-provider`
For more info about this error, refer to the following article: https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/

#### Other Tips

- Always run `yarn install` after pulling from master or checking out to a remote branch
- Always update your local master branch by running `git pull` everytime a PR is merged to minimize the need to resolve conflicts when you are creating a PR

