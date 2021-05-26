# prod environment
FROM nginx:stable-alpine
LABEL maintainer="Jan-Hendrik Hausner <to.jan-hendrik.hausner@outlook.com>"
COPY nginx/default.conf /etc/nginx/conf.d
COPY build /usr/share/nginx/html
ENV REACT_APP_BACKEND_HOST=localhost
ENV REACT_APP_BACKEND_PORT=3005
EXPOSE 80
