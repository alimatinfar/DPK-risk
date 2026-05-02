FROM node:22-alpine AS stage1

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm config set registry http://upm/repository/npm3/

RUN npm install --loglevel verbose -g vite@8.0.4

RUN npm install --loglevel verbose --force

RUN npm run build

FROM scratch AS export-stage

COPY --from=stage1 /usr/src/app/dist  /dist