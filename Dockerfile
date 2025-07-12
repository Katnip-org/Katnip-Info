# --- Stage 1: Build Docusaurus site ---
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build

# --- Stage 2: Serve with Nginx ---
ARG NGINX_VERSION=1.27.3
ARG APP_PORT=80
FROM nginx:${NGINX_VERSION}-alpine

LABEL name="docusaurus-classic-starter"

# Remove default nginx site config (optional but cleaner)
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
