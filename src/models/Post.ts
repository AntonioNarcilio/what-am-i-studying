import mongoose  from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },  
  content: {
    type: String,
    required: true
  }, 
  author: {
    type: mongoose.Schema.Types.ObjectId,  // gerando hash id
    ref: 'User', // referencia ao model User
    require: true,
  }
})

export default mongoose.model('Post', Schema);