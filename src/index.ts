import { ApolloServer, gql } from 'apollo-server';

interface UserProps {
  _id: string;
  name: string;
  email: string;
  active: boolean;
}
interface getUserByEmailProps{
  email: string;
}
interface createUserProps{
  name: string;
  email: string;
}
interface QueryProps {
  Query?:  {
    hello: () => string;
    users: () => UserProps[];
    getUserByEmail: (_: any, args: getUserByEmailProps) => UserProps;
  }

  Mutation?: {
    createUser: (_: any, args: createUserProps) => UserProps;
  }
}

//  Toda requisição é POST
//  Toda requisição bate no mesmo endpoint "/graphql"

//  Query => Metodo: GET
//  Mutation => Metodos: POST, PUT, PATCH, DELETE

const typeDefs = gql`
  type User {
    _id: ID!
    name: String! # simbolo de obrigatoriedade => !
    email: String! 
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]! # pode retornar um array vazio mais nunca retorne um array null
    getUserByEmail(email: String!): User!
  }

  type Mutation {
     createUser(name: String!, email: String!): User!
  }
`;

const users = [
  { _id: String(Math.random()), name: 'Antonio',  email: 'antonio@gmail.com',  active: true },
  { _id: String(Math.random()), name: 'Arthur',  email: 'arthur@gmail.com',  active: false },
  { _id: String(Math.random()), name: 'Mario',  email: 'mario@gmail.com',  active: true }
];

const resolvers: QueryProps = {
  Query: {
    hello: () => "Hello word",
    users: () => users,
    //              👇 ignorando o 1° parametro
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email)
    }
  },

  Mutation: {
    createUser: (_, args) => {
      const newUser: UserProps = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true
      }

      users.push(newUser);
      return newUser;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers: resolvers as any });
server
  .listen()
  .then(({ url }) => console.log(`🚀 Server started at ${url}`));