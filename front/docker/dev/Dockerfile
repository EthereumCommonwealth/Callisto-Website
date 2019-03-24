FROM node:10-jessie

RUN npm i -g babel-cli pm2

COPY entry.sh /entry.sh
RUN chmod 0777 /entry.sh
RUN chmod +x /entry.sh

WORKDIR /app

ENTRYPOINT ["/entry.sh"]
