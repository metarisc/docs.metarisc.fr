# Phase 1 : build web app
FROM node:18-alpine as builder

# Set up builder workdir
WORKDIR /usr/src

# Install the dependencies.
COPY package.json .
COPY package-lock.json .
RUN npm ci

# Build routine
COPY src src
COPY .eleventy.js .eleventy.js
RUN npm run generate

# Phase 2 : set up nginx http server
FROM nginx:1.27-alpine

# Healthcheck routine.
RUN apk add curl
HEALTHCHECK --interval=3s --timeout=3s CMD curl -sS --fail 0.0.0.0:80 || exit 1

# Nginx rewrites
COPY server/nginx.conf /etc/nginx/nginx.conf
COPY server/conf.d /etc/nginx/conf.d

# Remove default nginx pages
RUN rm -rf /usr/share/nginx/html/*

# Copy the web app into the public default wwww folder
COPY --from=builder /usr/src/dist /usr/share/nginx/html