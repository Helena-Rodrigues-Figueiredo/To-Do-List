# Bem-vindo ao projeto To-Do-List 📚

Neste projeto foi criada uma to-do-list que permite ao usuário adicionar, editar e excluir tarefas. A tarefa pode ser marcada como "Pendente" ou "Concluída" através do checkbox. Para ter acesso às suas tarefas, o usuário deve acessar sua conta através de seu Login e Senha. Caso não seja cadastrado, deve acessar a página User e criar um cadastro inserindo "nome, email e senha".
Desenvolvi uma aplicação completa utilizando Node.js no backend e Vue.js no frontend.

## Link da aplicação:
* [To-Do-List](https://to-do-list-2023.surge.sh/)
* Usuário para teste:  
```
email: user@email.com  
senha: 123456  
```

## Páginas da aplicação

![Captura de tela de 2023-02-20 10-36-06](https://user-images.githubusercontent.com/99517204/220123369-5a3bbc78-1a2e-409b-8004-127bd525f946.png)
![Captura de tela de 2023-02-20 10-36-20](https://user-images.githubusercontent.com/99517204/220123403-71d2bb48-76b0-4296-8160-8c4f5d4c6266.png)
![Captura de tela de 2023-02-20 10-37-14](https://user-images.githubusercontent.com/99517204/220123433-648c0ada-10c7-4c6b-9fe2-ffce0e7ed4c0.png)

## Tecnologias utilizadas

### Backend
* Node.js
* Express
* Sequelize
* Bcrypt
* Joi
* MySql
* Dotenv

### Frontend
* Vue.js
* Axios
* Bootstrap

## Como rodar o projeto na sua máquina 

### 1. Navegue até o local onde deseja clonar o repositório e utilize o git clone:
```
git clone git@github.com:Helena-Rodrigues-Figueiredo/To-Do-List.git
```

### 2. Acesse a pasta 'To-Do-List'
```
cd To-Do-List
```

### 3. Na pasta "backend", altere o arquivo ".env-example" para ".env" e preencha com suas variáveis;


### 4. Para utilizar o SQL pelo Docker utilize o seguinte comando:
```
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=sua-senha-mysql -d -p 3306:3306 mysql:5.7
```

### 5. Acesse as pasta "frontend", instale as dependências e rode npm run serve:
```
cd backend
npm install
npm start
```

### 6. Acesse as pasta "backend", instale as dependências, rode npm start e altere o arquivo http.js:
```
cd frontend
npm install
npm run serve
```
* No arquivo frontend/src/services/https.js comente a variável baseURL e descomente a baseURL: 'http://localhost:3001'. Caso seu
backend não esteja rodando na porta 3001, realize a alteração da porta

### 7. Após acessar o frontend, crie um usuário no formato:

Nome: deve conter no mínimo 3 caracteres   
Email: usuario@email.com   
Password: deve conter no mínimo 6 caracteres   
