require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./middleware/auth');
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
const startApolloServer = async () => {
  await server.start();
  app.use((req, res, next) => {
    console.log(`[REQUEST]: ${new Date().toISOString()} - ${req.method} ${req.path} - Body:`, req.body);
    next();
  });
  server.applyMiddleware({ app });
  db.once('open', () => {
    console.log(`Database connection opened at ${new Date().toISOString()}`);
    app.listen(PORT, () => {
      console.log(`[SERVER]: API server running on port ${PORT}!`);
      console.log(`[SERVER]: Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};
startApolloServer();