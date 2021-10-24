FROM node:alpine

WORKDIR /app    

COPY package.json /app

RUN npm i

COPY . /app

ENV PORT=4000

EXPOSE ${PORT}

CMD ["npm","start"]