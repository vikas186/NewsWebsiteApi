const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
        username : {
        type : String,
        default : null
    },
    email : {
        type : String,
        default : null
    },
    phone : {
        type : String,
        default : null
    },
    password : {
        type : String,
        default : null
    },
    iama: {
        type: Number,
        enum: [1, 2],
        default: 1
    }

},
{  
    timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
}
);

const userLoginSignup = new mongoose.model('userLoginSignup ', schema);
module.exports = userLoginSignup ;
