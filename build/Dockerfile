FROM node:lts-gallium AS build-web
WORKDIR /app
COPY ./web .
RUN npm ci && npm run build

FROM node:lts-gallium AS build-api
WORKDIR /app
COPY ./api .
RUN npm ci

FROM cloudron/base:3.2.0@sha256:ba1d566164a67c266782545ea9809dc611c4152e27686fd14060332dd88263ea

RUN mkdir -p /app/code/api /app/code/web
WORKDIR /app/code
COPY --from=build-api /app/ /app/code/api
COPY --from=build-web /app/dist/mail-client /app/code/web

COPY build/start.sh /app/code/start.sh

CMD [ "/app/code/start.sh" ]
