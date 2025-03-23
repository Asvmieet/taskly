import mongoose from 'mongoose'

const {Schema} = mongoose

const auth = new Schema({
    username: String,
    password: String,
    
})
