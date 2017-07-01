/* eslint-disable linebreak-style */
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
   type User {
    id: Int!
    firstName: String
    age: Int
   }
  
  type Query {
        hello: String! 
        user(id: String!): User
    }
 `;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
