const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'oderItem',
      required: true,
    },
  ],
});

exports.Order = mongoose.model('Order', orderSchema);
