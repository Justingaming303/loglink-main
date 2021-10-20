const mongoose = require('mongoose');
const { Schema } = mongoose;
// const { ticketType} = require('../public/script')

const todoSchema = new Schema({

    custUser: String,
    custID: String,
    assignedName: String,
    assignedRank: String,
    assignedID: String,
    involvedStaff: String,
    ticketNumber: String,
    ticketDate: String,
    ticketType: String,
    isTherePayment: String,

})

module.exports = mongoose.model('Todo', todoSchema)

