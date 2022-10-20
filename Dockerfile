FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy app and configs
COPY package*.json ./

RUN npm install
# If you are building your code for production (do NOT ignore git 'node_modules')
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
