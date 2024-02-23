npm init -y para iniciar o node no diretório (se for criar do 0)

npm install express

nmp start para inciar a aplicação (mas precisa ter o script no package)

http://localhost:3456/ para ver a pagina inicial
http://localhost:3456/sobre para ver o sobre
http://localhost:3456/imagem para ver a imagem do xadrez

criando os modelos antes do banco de dados:
npx sequelize model:create --name Partida --attributes "userId:integer, pontuacao:integer" 
npx sequelize model:create --name Curso --attributes "sigla:string, nome:string, descricao:text"
npx sequelize model:create --name Area --attributes "nome:string"
npx sequelize model:create --name User --attributes "nome:string, email:string, senha:string, cursoId:integer"

Migrations são responsáveis por gerir o esquema do banco de dados. Para criar/atualizar o database
npx sequelize db:migrate

para criar o seeder
npx sequelize seed:create --name Areas
npx sequelize-cli db:seed:all

npx sequelize migration:create --name add-columns-areaId (para criar nova coluna na tabela cursos)
npx sequelize db:migrate (atualiza a mudança)
npx sequelize db:migrate:undo (remove a ultima coluna adicionada)



docker-compose
criou arquivo docker-compose.yml com os serviços de banco de dados
docker compose up -d db-mysql para subir os conteiners
banco de dados pronto
verificar com sudo docker ps
npx sequelize db:migrate
npx sequelize-cli db:seed:all

docker compose down para desligar o serviço

