FROM node:16

WORKDIR /web/
COPY . .

RUN npm install -g pnpm && pnpm install && pnpm run build

FROM nginx:alpine
LABEL MAINTAINER="JamesGoslingCN@qq.com"

COPY ./build/my.conf /etc/nginx/conf.d/my.conf
COPY --from=0 /web/dist /usr/share/nginx/html
RUN cat /etc/nginx/nginx.conf
RUN cat /etc/nginx/conf.d/my.conf
RUN ls -al /usr/share/nginx/html
