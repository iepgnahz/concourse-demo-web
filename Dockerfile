FROM nginx

COPY ./ci/nginx.conf /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html/
