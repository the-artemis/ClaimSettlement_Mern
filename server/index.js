import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import client from 'prom-client';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import userRoutes from './routes/user.js';
import policyRoutes from './routes/policy.js';
import loginRoutes from './routes/login.js';
const app = express();

app.use(cors(
    {
        origin: ["https://claim-settlement-mern-backend.vercel.app/"],
        methods: ["POST", "GET", "PUT"],
        credentials: true
    }
));

// Use the router


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cors());

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({register:client.register});

app.use('/user', userRoutes);
app.use('/policy', policyRoutes);
app.use('/login', loginRoutes);
app.get('/metrics',async(req,res)=>{
    res.setHeader('Content-Type',client.register.contentType)
    const metrics = await client.register.metrics();
    res.send(metrics);
})

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Policy API Documentation',
            version: '1.0.0',
            description: 'API documentation for all the policies'
        },
        servers:[
            {
               url: 'http://localhost:5000/'
            }
        ]
    },
    apis:['./routes/*.js']
};


const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const CONNECTION_URL = 'mongodb+srv://admin1:admin1@cluster0.n8xulco.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

