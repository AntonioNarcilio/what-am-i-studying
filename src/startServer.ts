import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import colors from 'colors';

const DB_NAME = 'graphql'
const MONGO_URL = `mongodb://localhost:27017/${DB_NAME}`;

async function startServer ({ typeDefs, resolvers }:any) {
  try {
    mongoose.connect(MONGO_URL,{
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.info(colors.green("\n✅ Successful connection with mongodb"));
  } catch (error) {
    console.error(colors.bold.red(`${error}`));
  }

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(colors.blue('🚀 Server started at'), colors.bold.blue(`${url}`)));
  
}

export default startServer;