const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Customer = require('../models/Customer');

async function processOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const order = await Order.findById(orderId);
            if (order) {
                order.status = 'completed';
                await order.save();
            }
            resolve();
        }, 2000);
    });
}

router.post('/', async (req, res) => {
  try {
    // check if customer exists
    const customer = await Customer.findById(req.body.customer);
    if (!customer) {
      return res.status(400).json({ message: 'Customer not found' });
    }

    const order = new Order(req.body);
    order.status = 'pending';
    await order.save();

    // process order
    processOrder(order._id);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('customer');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 