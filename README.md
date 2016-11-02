# Auth - Authentication & Authorization
## Authentication
**Logging in and Signing up**; there are different strategies
* email/username + pw - Local Authorization
* 3rd Party - OAuth - Outside source for authorization (FB, Twitter, Google+)

Our Authorization program will be [Passport.js](http://pasportjs.org) and we will be using *local* strategies.

### User Passwords
So how do you secure a password? Not through the server. This is a security risk.

We will be using a library that uses Password Hash Salting. This will **encrypt** passwords before storing. We will *not* be storing the original password. See [Slides](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_103)
* Middleware to use: passport-local-mongoose
  * Adds **username, hash, and salt** fields to our User Schema
  * Adds methods to our User Model:
    * User.authenticate()
    * User.register()
    * Others (see [Slides](https://docs.google.com/presentation/d/1vYs67CP7RVaqPIv2tcjcqzD8i0w6eSAuuWL2E2Zgyhs/edit#slide=id.g139635eed8_0_122) with link to documentation)
    
See [models/user.js]() for schema and code using passport-local-mongoose

## Authorization - Week 9a