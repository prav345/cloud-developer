import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

console.log("username-" + c.username);
console.log("password- " + c.password);
console.log("database-" + c.database);
console.log("host-" + c.host);

//console.log("process.env.username-"+process.env.username);

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

