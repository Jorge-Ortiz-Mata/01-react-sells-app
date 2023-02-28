FROM node:16 as base

WORKDIR /01-react-sells-app

RUN apt-get update -qq \
    && apt-get install -y nodejs \
    ca-certificates \
    curl \
    sudo \
    postgresql-client \
    imagemagick \
    libvips

COPY package.json .

RUN npm install

COPY . .

VOLUME [ "/01-react-sells-app/node_modules" ]
