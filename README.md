## An application on for playing around with Github Workflows/Actions and implementing a continous Static/Dynamic/Interactive/Runtime Application Security Testing and Software Composition Analysis

### Project description:
A people project for saving and displaying amazing people

To start the application locally, a postgres database must be up running. Here an example on how to do this easily on your local machine:
'docker run --name postgresDbContainer -p 6432:5432 -e POSTGRES_PASSWORD=postgresPasswort -e POSTGRES_USER=postgresUser -e POSTGRES_DB=peopledb -d postgres:latest'

Before starting the application execute the db migrations through 'npm run migrate'

To start the application run 'npm run start'
