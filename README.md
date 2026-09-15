# NEA-Emergency-Dispatching-Simulation
OCR A level computer science NEA project


### Setting up the database
To setup the database when working on development locally, follow these steps:
1. `docker pull postgres`
2. `docker images` to check if it is running.
3. `docker run --name name-here -e POSTGRES_PASSWORD=password-here -d -p 5432:5432 postgres`
4. `docker ps` to check if it is running.

The connection string is then `postgres://postgres:<password>@localhost:5432/postgres`. Insert this into the `.env` with `DATABASE_URL=`.
The `.env` also needs the number of salt rounds for the database (standard is `salt_rounds=10`).