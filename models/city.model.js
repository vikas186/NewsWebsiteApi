const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
        cityname : {
        type : String,
        default : null
    },
        isStatus : {
        type : Boolean,
        default : null
    }
},
{  
    timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
}
);

const city = new mongoose.model('City', schema);
module.exports = city;
