# How to Add Authentication with Google Authenticator in Node.js

Code for [How to Add Authentication with Google Authenticator in Node.js tutorial](https://blog.shahednasser.com/how-to-add-authentication-with-google-authenticator-in-node-js/)

## Installation

After cloning this repository, install the dependencies:

```bash
npm i
```

## Run the Server

Run the server with the following command:

```bash
npm start
```

The server will run at port 3000 if you do not change the config/default.json


## Create docker container

### Build and tag (eg: mfa)
```bash
docker build . -t mfa
```

### Start the MFA Docker image
```bash
docker run -p 3000:3000 -d mfa
```
The server will run at port 3000 if you do not change
* config/default.json
* Dockerfile (expose port)
