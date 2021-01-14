#################
# Build the app #
#################
FROM node:12-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . .
# RUN ng build --configuration production --output-path=/dist
RUN npm run build

################
# Run in NGINX #
################
FROM nginx:alpine
COPY --from=build app/dist /usr/share/nginx/html

EXPOSE 4200 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]