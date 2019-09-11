import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:3000/graphql`
  }
});

const app = express();

SERVER.applyMiddleware({
  app
});

models.sequelize.sync({}).then(() => app.listen(3000));
