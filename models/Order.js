const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - customer
 *         - items
 *         - totalAmount
 *       properties:
 *         customer:
 *           type: string
 *           description: Customer ID
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               quantity:
 *                 type: number
 *               price:
 *                 type: number
 *         totalAmount:
 *           type: number
 *           description: Total order amount
 *         status:
 *           type: string
 *           enum: [pending, processing, completed, cancelled]
 *         paymentStatus:
 *           type: string
 *           enum: [pending, paid, failed]
 */
const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    items: [{
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
    }],
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema); 