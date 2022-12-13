# passport-boilerplate

<h1>FeetWasher</h1>

As a member of several churches over a number of years, one thing that always seems to come up is a disconnect between people that need help and other members who would love to help, but simply had no idea there was a need. There are elderly people who need lawn care, physically disabled people who just need a ride to appointments and even young couples who could use an extra hand or two moving into their new house.

Inspired by the church in Acts, who demonstrated what it was like to live in true community, I wanted to build a space where people could communicate those needs and fill them for others. Knowing that this platform could bring a church together in love and service, I decided to add prayer requests to the existing service forum. In all, my hope is greater than that of needs being met; my hope is that authentic community is reborn.

Okay, but why the funny name?

The name "FeetWasher" is inspired by the practice of washing feet in Biblical times. Because people back then wore sandals around all day, their feet would often get pretty gross. It was no wonder they considered feet the dirtiest part of the body and expected them to be washed off before entering a home. Jesus, the Lord and Savior of this world, shocked everyone when He decided to humbly kneel and wash the feet of others in an ultimate demonstration of selfless service. Not only did he exemplify this service, but He also commanded us to do the same. In other words, He wants us to be a FeetWasher!



Planning


#### Setup your git repo
0. Setup your `.env` file and add all the things you need! (look at mongoose movies for reference!)
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin main` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin main`

#### Setup your login (THE APP WON'T WORK until you do, no VIEWS are setup, or the landing route)

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

#### Make a commit 

```git commit -m "setup up oauth and User Model"```
