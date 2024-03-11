import jwt from 'jsonwebtoken';
//import { promisify } from 'util';


// export const authenticateToken = async (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
    
//     if (!token) {
//         return res.status(401).json({ message: 'Token not provided' });
//     }

//     try {
//         const decoded = await promisify(jwt.verify)(token, 'bbed9cf1e2fb00d680c51eb3095e921ef0a2f62f966b2ceeb5211797e0d4de7b');
//         req.user = decoded;
//         //const decoded = jwt.verify(token, 'bbed9cf1e2fb00d680c51eb3095e921ef0a2f62f966b2ceeb5211797e0d4de7b');
//        // return decoded;
//         next();
//     } catch (error) {
//         return res.status(403).json({ message: 'Invalid token' });
//     }
// };

export const authenticateToken = (req, res, next) => {
    
        // Get the token from the Authorization header
        const token = req.headers['authorization'];
    
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }
    
        // Verify the token
        jwt.verify(token, 'bbed9cf1e2fb00d680c51eb3095e921ef0a2f62f966b2ceeb5211797e0d4de7b', (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Failed to authenticate token' });
            }
            // If verification is successful, store the decoded username in the request object
            req.username = decoded.username;
            next();
        });
};