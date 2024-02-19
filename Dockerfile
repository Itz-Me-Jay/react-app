# Stage 1 : React Application

# Use an official Node runtime as a parent image
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine3.15 As build

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install any needed packages specified in package.json
RUN npm install -g npm@latest

# Copy the current directory contents into the container at /app
COPY . .

# Run npm run build when the container launches
RUN npm run build

# Stage 2 : nginx 

# Use an official Nginx runtime as a parent image
ARG NGINX_VERSION=1.19.0
FROM nginx:${NGINX_VERSION}-alpine As serve

# Copy the build output from Stage 1 to the Nginx html directory
COPY --from=build --chown=nginx:nginx /app/node_modules /usr/share/nginx/html/node_modules
COPY --from=build --chown=nginx:nginx /app/package.json /usr/share/nginx/html/package.json

# Make port 80 available to the world outside this container
EXPOSE 80
