# Use the official Node.js Alpine image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app


# Copy package.json to the working directory
COPY package*.json ./

# Copy yarn.lock to the working directory
COPY yarn.lock ./

# Copy the rest of the source code to the working directory
COPY . .

# Install the dependencies
RUN yarn install

# Build the app
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["yarn", "start"]


