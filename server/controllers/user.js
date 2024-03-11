import PostClaim from "../models/user.js";
import User from "../models/login.js";


export const getUser = async (req,res) => {
    try{
        const postclaims = await PostClaim.find();
        res.status(200).json(postclaims);

    }catch (error){
        res.status(404).json({message: error.message});
    }
}


// Controller functions for CRUD operations

export const createClaim = async (req, res) => {
    try {
        console.log(req.body);
        const claim = await PostClaim.create(req.body);

        const user = await User.findOne({ username: req.body.name });
        if (!user) {
            throw new Error('User not found');
        }

        // Store the claim_id in the user document
        user.claim_ids.push(claim._id); // Assuming the claim_ids field exists in the user schema

        // Save the updated user document
        await user.save();

        res.status(201).json(claim);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// Get a single claim by ID
export const getClaimById = async (req, res) => {
    const { id } = req.params;
    try {
        const claim = await PostClaim.findById(id);
        res.status(200).json(claim);
    } catch (error) {
        res.status(404).json({ message: 'Claim not found' });
    }
}

// Update a claim by ID
export const updateClaim = async (req, res) => {
    const { id } = req.params;
    const { hospital, name, address, age, contact, diagnosis, billNum, billAmt, dateofAdmn, dateofDis, evidence } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No claim with that id');

    const updatedClaim = { hospital, name, address, age, contact, diagnosis, billNum, billAmt, dateofAdmn, dateofDis, evidence, _id: id };

    await PostClaim.findByIdAndUpdate(id, updatedClaim, { new: true });

    res.json(updatedClaim);
}

// Delete a claim by ID
export const deleteClaim = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No claim with that id');

    await PostClaim.findByIdAndRemove(id);

    res.json({ message: 'Claim deleted successfully' });
}

export const updateClaimStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // New status to be updated

    try {
        // Find the claim by ID and update its status
        const updatedClaim = await PostClaim.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedClaim) {
            return res.status(404).json({ message: 'Claim not found' });
        }

        res.status(200).json(updatedClaim); // Send the updated claim as response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle server error
    }
}

export const updateTpaClaimStatus = async (req, res) => {
    const { id } = req.params;
    const { tpastatus } = req.body; // New status to be updated

    try {
        // Find the claim by ID and update its status
        const updatedClaim = await PostClaim.findByIdAndUpdate(id, { tpastatus }, { new: true });

        if (!updatedClaim) {
            return res.status(404).json({ message: 'Claim not found' });
        }

        res.status(200).json(updatedClaim); // Send the updated claim as response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle server error
    }
}