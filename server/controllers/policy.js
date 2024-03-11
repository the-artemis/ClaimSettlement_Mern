import Policy from '../models/policy.js'; 

// Controller function to create a new policy
export const createPolicy = async (req, res) => {
    try {
        const { name, policy_number, coverage_amt, claimed_amt ,pol_id, description} = req.body;
        const policy = new Policy({ name, policy_number, coverage_amt, claimed_amt,pol_id,description });
        await policy.save();
        res.status(201).json(policy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all policies
export const getPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single policy by ID
export const getPolicyById = async (req, res) => {
    const { id } = req.params;
    try {
        const policy = await Policy.findById(id);
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(policy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a policy
export const updatePolicy = async (req, res) => {
    const { id } = req.params;
    const { name, policy_number, coverage_amt, claimed_amt } = req.body;
    try {
        const updatedPolicy = await Policy.findByIdAndUpdate(id, { name, policy_number, coverage_amt, claimed_amt }, { new: true });
        if (!updatedPolicy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(updatedPolicy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePolicy = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPolicy = await Policy.findByIdAndDelete(id);
        if (!deletedPolicy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json({ message: 'Policy deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};