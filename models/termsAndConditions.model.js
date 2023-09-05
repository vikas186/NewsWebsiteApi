const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
        title : {
        type : String,
        default : null
    },
        content : {
        type : String,
        default : null
    },
        time : {
        type : Number,
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

const termsAndConditions = new mongoose.model('TermsAndConditions', schema);
module.exports = termsAndConditions;
