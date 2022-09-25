FROM node:14.15.4-slim

RUN apt update && apt install -y --no-install-recommends \
  git \
  gpg \
  gnupg \ 
  gpg-agent \
  openssh-client \
  socat \
  ca-certificates \
  nano

USER node 

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]