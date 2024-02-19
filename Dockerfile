# Stage 1 : React Application

# Use an official Node runtime as a parent image
FROM node:18-alpine As build

# Set the working directory in the container to /react-app
WORKDIR /react-app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install any needed packages specified in package.json
RUN npm install -g npm@latest

# Copy the current directory contents into the container at /react-app
COPY . .

# Run npm run build when the container launches
RUN npm run build

# Stage 2 : nginx 

# Use an official Nginx runtime as a parent image
FROM nginx:1.19.0-alpine As serve

# Copy the build output from Stage 1 to the Nginx html directory
COPY --from=build /react-app/build /usr/share/nginx/html 

# Make port 80 available to the world outside this container
EXPOSE 80
