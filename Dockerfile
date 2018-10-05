FROM node:8.12.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8080
EXPOSE 3000
EXPOSE 27017
