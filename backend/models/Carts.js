const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,  
        ref: "user"         
    },
    title:{
        type: String,
        required: true
    },
    amount:{            
        type: String,
        required: true
    },
    price:{             
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('carts', cartSchema);       