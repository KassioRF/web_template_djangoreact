# Define a imagem base
FROM python:3.9

ENV PYTHONUNBUFFERED 1

# Define a variável de ambiente para a pasta do projeto
ENV APP_HOME=/backend

# Define o diretório de trabalho
WORKDIR $APP_HOME

# Copia o arquivo requirements.txt para a imagem
COPY requirements.txt $APP_HOME

# Cria e ativa um ambiente virtual
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

# Instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código fonte para a imagem
COPY . $APP_HOME

# Define a porta que será exposta
EXPOSE 8000

# Executa o comando para iniciar o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]