FROM node:22-alpine

# 作業ディレクトリ
WORKDIR /app

# package 系だけ先にコピーして依存解決
# COPY package*.json ./
# RUN npm install

COPY . .
# RUN npm install # これでよくない？


# CMD ["npm", "run", "dev"]