const supertest = require('supertest');
const express = require('express');


describe('policy', () => {
    describe('get policy route', () => {
        describe('given the policy does not exist', () => {
            it('should return error code', async () => {
                const app = express();
                const router = express.Router();
                app.use('/policy', router);
                const policyId = '123';
                //const policyId = '65e17c3dcf35e1ecf3c60047';
                await supertest(app)
                    .get(`/policy/get/${policyId}`) 
                    .expect(404); 
            });
        });
        describe('given the policy exists', () => {
            it('should return the policy', async () => {
                // Add your test case for the success scenario here
                // console.log("data reached");
                
            });
        });
    });
});





