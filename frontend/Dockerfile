# Define a imagem base
FROM node:16

# Define a variável de ambiente para a pasta do projeto
ENV APP_HOME=/frontend

# Define o diretório de trabalho
WORKDIR $APP_HOME

# Copia os arquivos necessários para a imagem
COPY package*.json $APP_HOME/
COPY tsconfig.json $APP_HOME/
COPY public/ $APP_HOME/public/
COPY src/ $APP_HOME/src/


# Instala as dependências do projeto
RUN npm install

# Compila os arquivos TypeScript
RUN npm run build

# Define a porta que será exposta
EXPOSE 3000

# Executa o comando para iniciar o servidor de desenvolvimento do React
CMD ["npm", "start"]