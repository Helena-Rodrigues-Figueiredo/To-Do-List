# Bem-vindo ao projeto To-Do-List 📚

Neste projeto foi criada uma lista de tarefas que permite ao usuário adicionar, editar e excluir tarefas. A tarefa pode ser marcada como "Concluída"
através do checkbox. Para ter acesso às suas tarefas, o usuário deve acessar sua conta através de seu Login e Senha, e caso não tenha conta deve se cadastrar
na página User.
Desenvolvi uma aplicação completa utilizando Node.js no backend e Vue.js no frontend.

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

1. Navegue até o local onde deseja clonar o repositório e utilize o git clone:
```
git clone git@github.com:Helena-Rodrigues-Figueiredo/To-Do-List.git
```
2. Crie o arquivo ".env" na pasta "backend" com as variáveis necessárias:
```
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_HOST=
PORT=
```
3. Caso queira utilizar o SQL pelo Docker utilize o seguinte comando:
```
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7
```

4. Acesse as pastas "frontend" e "backend", instale as dependências, crie o banco de dados 'todolist' e inicie o servidor:
```
cd backend
npm install
npm run db-init
npm run dev
```
```
cd frontend
npm install
npm run serve
```
