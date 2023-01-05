# Add MFA/2FA Authentication with Google Authenticator
* Using Node.js & docker

* Idea was described on shahednasser´s blog, in the post [How to Add Authentication with Google Authenticator in Node.js tutorial](https://blog.shahednasser.com/how-to-add-authentication-with-google-authenticator-in-node-js/)

***So why this?**

*I wanted to extend the tutorial with docker*

## Installation

After cloning this repository, install the dependencies:

```bash
npm i
```

## Run the APP

Run the 'APP' with the following command:

```bash
npm start
```

The 'APP' will run at port 3000 if you do not change the config/default.json

### Test it
```bash
Open your browser http://localhost:3000
```


# Ready for docker

## Create docker container

### Build and tag you Docker container (eg: mfa)
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


### Test it
```bash
Open your browser http://localhost:3000
```


