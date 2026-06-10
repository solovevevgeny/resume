FROM node:latest AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . . 
RUN npm run build


FROM nginx AS runner
# USER nginx

COPY --chown=nginx:nginx  --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
