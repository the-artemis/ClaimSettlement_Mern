import mongoose from 'mongoose';

const policySchema = new mongoose.Schema({
    policy_id: Number,
    name: String,
    policy_number: Number,
    coverage_amt: Number,
    claimed_amt: Number,
    description: String,
});
const Policy = mongoose.model('Policy', policySchema);

export default Policy;

