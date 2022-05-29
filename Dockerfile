# pull the Node.js Docker image
FROM node:12

# create the directory inside the container
WORKDIR /home/project/note

# copy the package.json files from local machine to the workdir in container
# COPY package*.json ./

# copy the generated modules and all other files to the container
COPY . .

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# run npm install in our local machine
WORKDIR /home/project/note/client
RUN npm install
WORKDIR /home/project/note/server
RUN npm install
WORKDIR /home/project/note
RUN npm install

# the command that starts our app
# CMD ["npm", "start"]
CMD ["npm", "start"]
