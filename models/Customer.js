const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 */

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Customer', customerSchema); 