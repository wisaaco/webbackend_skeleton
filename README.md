# Backend project
with JWT Authentication & Authorization, JSONWebToken & Sequelize

## MariaDB setup:
- Port 3306
```
sudo apt update
TODO
```

- Configuration DB
```
CREATE DATABASE webbackend;
CREATE USER 'webuser'@'localhost' IDENTIFIED BY 'xxx';
GRANT ALL PRIVILEGES ON webbackend.* To 'webuser'@'localhost' IDENTIFIED BY 'xxx';
FLUSH PRIVILEGES;
```
- Uncomment the next lines in server.js, only the first execution!
```
db.sequelize.sync().then(()=>{
     initial();
});
```

- And, create one user
```
curl -d "username=test&email=test@uib.es&password=test" -X POST http://localhost:8080/api/auth/signup/
```


## Redis setup:
- Port 6379

```
sudo apt update
sudo apt install redis-server
redis-server & 
redis-cli ping
```

## Project setup
- The app works on localhost:8081
- MySQL configuration in /config/db.config.js file
- API defined on /routes folder
```
npm install
```
## Run
```
node server.js
```


### Notes
- Project based on https://bezkoder.com/node-js-jwt-authentication-mysql/
- Other endpoints using myslq: https://bezkoder.com/node-js-rest-api-express-mysql/

#### By Isaac Lera
