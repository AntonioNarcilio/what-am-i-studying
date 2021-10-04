import { ApolloServer, gql } from 'apollo-server';

//  Toda requisição é POST
//  Toda requisição bate no mesmo endpoint "/graphql"

//  Query => Metodo: GET
//  Mutation => Metodos: POST, PUT, PATCH, DELETE

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello word"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen()
  .then(({ url }) => console.log(`🚀 Server started at ${url}`));