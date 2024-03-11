import User from '../models/login.js'; 
// import bcrypt from 'bcrypt';
// import Joi from 'joi';
import jwt from 'jsonwebtoken';
// Controller function to create a new user
export const createUser = async (req, res) => {
    const { username, email, password ,policy_ids} = req.body;

    try {
        const newUser = new User({
            username,
            email,
            password,
            policy_ids
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a user
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to authenticate a user
export const loginUser = async (req, res) => {
    const {username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ username: user.username }, 'bbed9cf1e2fb00d680c51eb3095e921ef0a2f62f966b2ceeb5211797e0d4de7b', { expiresIn: '1h' });
        console.log(token);

        res.status(200).json({ message: 'Login successful' ,token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


export const getUserPolicies = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({ username }).populate('policy_ids');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.policy_ids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserClaims = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({ username }).populate('claim_ids');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.claim_ids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
