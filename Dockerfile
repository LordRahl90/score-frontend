FROM node:lts-alpine AS builder

WORKDIR /app

COPY  ./ ./

RUN npm install

RUN NODE_ENV=testing npm run build


FROM httpd:alpine

COPY --from=builder ./app/build/ /usr/local/apache2/htdocs/

EXPOSE 80