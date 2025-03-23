const mongoose = require('mongoose');
const taskin = require('./schema/taskin');
const uri = "mongodb+srv://tasklyconnect:mytasklyconnect.tasklyconnect.dev@taskly.gphpq.mongodb.net/"

async function database() {
    try {
        await mongoose.connect(uri);   
        console.log('Connected to mongoDB successfully, no errors found.');
        } catch(error) {
            console.log('Error: ', error);
        }
    
}