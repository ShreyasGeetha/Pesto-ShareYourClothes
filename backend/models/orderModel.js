import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId, // which user created which product
    required: true,
    ref: 'User' 
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true
      },    
      image: {
        type: String,
        required: true
      },
      product: {
        type: mongoose.Schema.Types.ObjectId, // which user created which product
        required: true,
        ref: 'Product'
      },    
    }    
  ], 
  dropLocation: [
    {
      address: {
        type: String,
        required: true
      },    
      city: {
        type: String,
        required: true
      },
      postalCode: {
        type: String,
        required: true
      },    
      country: {
        type: String,
        required: true
      },
    }
  ],
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },

});

// create a model in mongodb called User using userSchema
const Order = mongoose.model('Order', orderSchema);

export default Order;