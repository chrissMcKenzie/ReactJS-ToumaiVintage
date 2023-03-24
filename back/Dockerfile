# FROM node:19
# WORKDIR /back
# COPY package.json /AppToumaiVintage
# RUN npm install
# COPY . /AppToumaiVintage
# CMD ["npm", "start"]

FROM node:19
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]