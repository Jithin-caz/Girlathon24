# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm i vite
# RUN npm install --silent
# COPY . .
# EXPOSE 5173
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]
FROM node:lts-alpine

WORKDIR /usr/src/app

# Copy dependency files first
COPY ["package.json", "package-lock.json*", "./"]

# Install ALL dependencies (including devDependencies like Vite)
RUN npm install --silent

# Copy the rest of the project
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Run as non-root user
RUN chown -R node /usr/src/app
USER node

# Start the Vite dev server
CMD ["npm", "start"]
