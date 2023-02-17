# web_template_djangoreact

Este é um template básico para a construção de aplicações web com backend construído com Django Rest Framework e frontend construído com React TypeScript. O objetivo deste template é servir como uma base sólida para o desenvolvimento de aplicações web.

## Pré-Requisitos

Antes de utilizar este template, é necessário ter o Docker instalado em seu sistema. Para instalar o Docker, siga as instruções disponíveis no site oficial:

 - Docker: [https://www.docker.com/](https://www.docker.com/)

## Utilização

Para utilizar este template, siga os seguintes passos:
 
  1. Clone este repositório em sua máquina:
  
    `git clone https://github.com/KassioRF/web_template_djangoreact.git`

  2. Acesse o diretório raiz do projeto:

  3. Inicie os containers Docker com o docker-compose:

  4. Abra o navegador e acesse a URL `http://0.0.0.0:3000` para visualizar o frontend da aplicação.

  5. Para acessar o backend, utilize a URL `http://0.0.0.0:8000`.

## Estrutura de Diretórios

A estrutura de diretórios deste template segue o seguinte padrão:

```
  .WEB_TEMPLATE_DJANGOREACT
  ├── backend
  │   ├── api
  │   │   ├── admin.py
  │   │   ├── apps.py
  │   │   ├── init.py
  │   │   ├── migrations
  │   │   ├── models.py
  │   │   ├── pycache
  │   │   ├── serializers.py
  │   │   ├── tests.py
  │   │   ├── urls.py
  │   │   └── views.py
  │   ├── project
  │   │   ├── asgi.py
  │   │   ├── init.py
  │   │   ├── pycache
  │   │   ├── settings.py
  │   │   ├── urls.py
  │   │   └── wsgi.py
  │   ├── db.sqlite3
  │   ├── Dockerfile
  │   ├── manage.py
  │   └── requirements.txt
  ├── frontend
  │   ├── Dockerfile
  │   ├── node_modules
  │   │   ├── ...
  │   ├── package.json
  │   ├── package-lock.json
  │   ├── public
  │   │   ├── favicon.ico
  │   │   ├── index.html
  │   │   ├── logo192.png
  │   │   ├── logo512.png
  │   │   ├── manifest.json
  │   │   └── robots.txt
  │   ├── README.md
  │   ├── src
  │   │   ├── App.css
  │   │   ├── App.test.tsx
  │   │   ├── App.tsx
  │   │   ├── index.css
  │   │   ├── index.tsx
  │   │   ├── logo.svg
  │   │   ├── models
  │   │   ├── react-app-env.d.ts
  │   │   ├── reportWebVitals.ts
  │   │   ├── services
  │   │   └── setupTests.ts
  │   └── tsconfig.json
  ├── docker-compose.yaml
  ├── planejamento.md
  └── README.md
```

### Backend

O diretório `backend` contém a implementação do backend da aplicação, utilizando o framework Django Rest Framework. Os arquivos mais importantes neste diretório são:

 - `api`: diretório que contém as implementações dos endpoints da API. Este diretório também contém a implementação dos modelos de banco de dados, em models.py.
 - `project`: diretório que contém as configurações do projeto Django.
 - `Dockerfile`: arquivo de configuração do Docker para o backend.
 - `requirements.txt`: arquivo que contém as dependências do projeto em Python.
### Frontend

O diretório `frontend` contém a implementação do frontend da aplicação, utilizando o framework React e TypeScript. Os arquivos mais importantes neste diretório são:

 - `public`: diretório que contém os arquivos estáticos do frontend, como HTML e imagens.
 - `src`: diretório que contém a implementação do frontend, organizada em componentes React e serviços.
 - `Dockerfile`: arquivo de configuração do Docker para o frontend.
 - `package.json`: arquivo que contém as dependências do projeto em Node.js.
 - `tsconfig.json`: arquivo de configuração do TypeScript.

### Docker Compose

O arquivo `docker-compose.yaml` é um arquivo de configuração do Docker Compose que define como os contêineres do aplicativo devem ser configurados e executados. Ele contém informações sobre os serviços do aplicativo, como o banco de dados, o servidor web e o servidor de desenvolvimento do React. Quando o Docker Compose é executado, ele inicia todos os contêineres necessários e configura suas conexões de rede.