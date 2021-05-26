# prod environment
FROM nginx:stable-alpine
LABEL maintainer="Jan-Hendrik Hausner <to.jan-hendrik.hausner@outlook.com>"
COPY nginx/default.conf /etc/nginx/conf.d
COPY build /usr/share/nginx/html
EXPOSE 80
