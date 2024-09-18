# frontend/Dockerfile
FROM node:18

WORKDIR /app

# Copiar os arquivos package.json e yarn.lock
COPY package.json ./

# Instalar dependências
RUN npm install

# Copiar o código do app
COPY . .

# Expor a porta onde o Next.js estará rodando
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento do Next.js
CMD ["npm","run", "dev"]
