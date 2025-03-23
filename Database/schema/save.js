import mongoose from 'mongoose'

const {Schema} = mongoose

const save = new Schema({
    username: String,
    tasks: [{type: String}],
    notes: String,
    colorPreference: String
    
})
