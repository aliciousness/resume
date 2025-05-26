FROM node:18-alpine AS local
WORKDIR /app
RUN apk add --no-cache wget curl ca-certificates && \
  curl https://gist.githubusercontent.com/aliciousness/c61936e29b3fb4b07c33aa25ae330f6a/raw/e950632b12d809f1ecb6d802e768e3fbbe42d296/gistfile1.txt > /usr/local/share/ca-certificates/root_ca.crt && \
  chmod 644 /usr/local/share/ca-certificates/root_ca.crt && \
  update-ca-certificates

CMD ["npm", "run", "dev"]

FROM node:18-bookworm AS production
WORKDIR /app
COPY ./dist/ .
USER 1000
EXPOSE 3000
CMD [ "npm", "run", "production" ]
