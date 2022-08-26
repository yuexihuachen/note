# pull the Node.js Docker image
FROM node:12

# create the directory inside the container
WORKDIR /home/project/note

COPY package*.json ./

RUN npm install 

RUN mkdir server

COPY server/package*.json ./server/

RUN npm install --prefix server

# copy the package.json files from local machine to the workdir in container
COPY . .

# copy the generated modules and all other files to the container
# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# run npm install in our local machine
# the command that starts our app
# CMD ["npm", "start"]
CMD ["npm", "start"]
