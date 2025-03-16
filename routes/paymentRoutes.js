const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        // check if order exists
        const order = await Order.findById(req.body.order);
        if (!order) {
            return res.status(400).json({ message: 'Order not found' });
        }

        // check if order is already paid
        if (order.paymentStatus === 'paid') {
            return res.status(400).json({ message: 'Order is already paid' });
        }

        const payment = new Payment(req.body);
        await payment.save();

        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id).populate('order');
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 