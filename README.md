# Auth - Authentication & Authorization
## Authentication
**Logging in and Signing up**; there are different strategies
* email/username + pw - Local Authorization
* 3rd Party - OAuth - Outside source for authorization (FB, Twitter, Google+)

Our Authorization program will be [Passport.js](http://pasportjs.org) and we will be using *local* strategies.

### Users
#### Passwords
So how do you secure a password? Not through the server. This is a security risk.

We will be using a library that uses Password Hash Salting. This will **encrypt** passwords before storing. We will *not* be storing the original password. See [Slides](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_103)
* Middleware to use: passport-local-mongoose
  * Adds **username, hash, and salt** fields to our User Schema
  * Adds methods to our User Model:
    * User.authenticate()
    * User.register()
    * Others (see [Slides](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_122) with link to documentation)

#### Full User setup
See [models/user.js](https://github.com/mechurat/week8b-authentication/blob/master/models/user.js) for schema and code using passport-local-mongoose

**SETUP FOR SCHEMA** in index.js

Needs mongoose to connect to database, body-parser to get the fields from the schema, and cookie-parser for passport.js. **SEE:** requirements at top of [index.js](https://github.com/mechurat/week8b-authentication/blob/master/index.js) and lines 52-67 for setup and [Slides](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_216) for how to setup middleware.

**SETUP FOR MIDDLEWARE** - passport & passport-local || [/lib/auth.js](https://github.com/mechurat/week8b-authentication/blob/master/lib/auth.js) and [Slides](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_246)

In **module.exports** we are returning two methods. Init and registerRoutes. Init has very specific code for initializing a user. See this [slide](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_258) from presentation. 
* The app.use() functions on lines 23-25 are specific setup quirks for passport and must be used.
* Also see line 27 for the locals res/req for user

Handlebars will allow us to setup routes based on a user being signed in our not. See this [slide](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_284). See code [/views/layouts/main.handlebars](https://github.com/mechurat/week8b-authentication/blob/master/views/view.handlebars) lines 23-32. 

Routes will be posted in [/lib/auth.js](https://github.com/mechurat/week8b-authentication/blob/master/lib/auth.js) in the registerRoutes() method. [SLIDES](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_292)

Follow the slides for directions on how to implement the code for Login/Sign up/Logout from auth.js.

## Authorization - Week 9a