import colors from 'colors';
import User from '../../../models/User';

interface UserTypes {
  _id: object;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  active: boolean;
}

interface UserDataTypes {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

export default {
  User: {
    fullName: (user: UserTypes) => `${user.firstName} ${user.lastName}`
  },
  
  Query: {
    users: () => User.find({}, (err: any, data: UserDataTypes) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err: any) => { console.error(colors.red(err)) }),
    
    user: (_:any, { id }: any) => User.findById(id, (err: any, data: UserDataTypes) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err:any) =>{ console.error(colors.error(err))}),
  },

  Mutation: {
    createUser: (_: any, { data }: any) => User.create(data),
    // a flag { new: true} faz com que retorne os novos dados, sem ela retorna os 👇 dados anteriores
    updateUser: (_: any, { id, data }: any) => User.findByIdAndUpdate(id, data, { new: true }, (err: any, data: UserDataTypes) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err: any) => { console.error(colors.error(err)) }),
    
    deleteUser: async (_: any, { id }: any) => {
      const deleted = await User.findByIdAndDelete(id);
      return !!deleted; // forcando de retorne um boolean
    }
  },
}