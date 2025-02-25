FROM node:20.15.0-alpine

WORKDIR /home/app

COPY package*.json .

# 300000ms => 5 phút
RUN npm install --timeout=300000

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start"]

