### Repositório com projetos testes para o desafio técnico para o estágio na empresa erural

------------


#### 1. Objetivo

Construir um sistema de streaming de vídeos, em que os usuários possam cadastrar salas, e criar uma lista de vídeos em cada sala. Posteriormente, o usuário pode compartilhar o link da sala e assistir aos vídeos simultaneamente com outros usuários da plataforma.



#### 2. Tecnologias utilizadas

A solução é composta de dois projetos, sendo:


##### 2.1. Backend

Construido na linguagem *Phyton*. Sendo responsável por fazer a manutenção das salas de reprodução com seus respectivos vídeos e prover acesso por meio de uma WEB API para o aplicativo web (frontend).


#####  2.2. Frontend

Aplicativo web, construído com HTML, CSS, JavaScript e o framework Bootstrap.

#### 3. Ferramentas utilizadas

**- Draw.io**

Para desenhar o diagrama da solução.

**- GitHub**

Para hospedar o código fonte do projeto.

**- Visual Studio Code**

Para desenvolvimento do código fonte.

**- https://pandao.github.io/editor.md**

Para a edição do arquivo readme.md do repositório do GitHub.

#### 4. Instruções para execução do projeto

##### 4.1. Backend

Para executar o backend, será necessário instalar o FastAPI (framework da API) e o uvicorn (Servidor de execução API)

No terminal Linux, digite os seguintes comandos:

pip install fastapi

E

pip install uvicorn


Após isto, acesse o diretório do projeto (backend\controllers) usando o console e digite o comando: 

**uvicorn MoviesController:app --reload**.

Após a mensagem de finalização da execução do comando, basta acessar o seguinte endereço no browser: **http://127.0.0.1:8000/docs**.
Será exibida a interface Swagger com todos os endpoints da API.


#### 4.2. Frontend

Para executar o frontend, basta acessar o diretório do projeto e abrir o arquivo *index.html*.
