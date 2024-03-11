import mongoose from 'mongoose';


const claimSchema = new mongoose.Schema({
    name: String,
    hname: String,
    age: Number,
    contact: Number,
    diagnosis: String,
    bill_no: Number,
    bill_amount: {
      type: String,
      default: null
    },
    date_addmission: {
        type: Date,
        default: Date.now
      },
    date_discharge: {
        type: Date,
        default: Date.now
      },
    treatment_details: String,
    status: {
      type: String,
      default: "pending" 
  },
  tpastatus: {
    type: String,
    default: "pending" 
}
});


const Claim = mongoose.model('Claim', claimSchema);

export default Claim;

