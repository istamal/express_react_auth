const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    refreshToken: { type: Boolean, default: false }
});

module.exports = model('user', TokenSchema);