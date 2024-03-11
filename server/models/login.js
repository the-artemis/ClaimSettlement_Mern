import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    policy_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Policy' }],
    claim_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Claim' }]
});


const User = mongoose.model('User', userSchema);


export default  User;