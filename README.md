# Rutas
    GET     /api/films      - recupera todas las peliculas
    POST    /api/films      - crea una pelicla
    PUT     /api/films/4    - edita la pelicula 4
    DELETE  /api/fim/4      - elimina la pelicla 4

npx sequelize-cli init // crea todas las carpetas
npx sequelize-cli model:create --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate		// correr migrations
npx sequelize-cli db:migrate:undo	// deshaciendo migrations

npx sequelize-cli seed:generate --name demo-user 	// generar un seeder
npx sequelize-cli db:seed:all			// corriendo los seeders 
