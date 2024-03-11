import React from 'react';
import './soc.css';

const HospitalSchedule = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Hospital Schedule of Charges</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consultation</td>
              <td>General consultation with a doctor</td>
              <td>Rs 1000</td>
            </tr>
            <tr>
              <td>X-Ray</td>
              <td>Simple X-Ray imaging</td>
              <td>Rs 6000</td>
            </tr>
            <tr>
              <td>Ultrasound</td>
              <td>Ultrasound imaging</td>
              <td>Rs 5000</td>
            </tr>
            <tr>
              <td>Blood Test</td>
              <td>Complete blood count (CBC)</td>
              <td>Rs 1500</td>
            </tr>
            <tr>
              <td>Surgery</td>
              <td>Minor surgery procedure</td>
              <td>Rs 10000</td>
            </tr>
            <tr>
              <td>Physical Therapy Session</td>
              <td>One-hour physical therapy session</td>
              <td>Rs 2000</td>
            </tr>
            <tr>
              <td>MRI Scan</td>
              <td>Magnetic Resonance Imaging (MRI)</td>
              <td>Rs 8000</td>
            </tr>
            <tr>
              <td>Echocardiogram</td>
              <td>Heart ultrasound imaging</td>
              <td>Rs 9500</td>
            </tr>
            <tr>
              <td>Electrocardiogram (ECG/EKG)</td>
              <td>Heart electrical activity test</td>
              <td>Rs 6500</td>
            </tr>
            <tr>
              <td>Colonoscopy</td>
              <td>Endoscopic examination of the colon</td>
              <td>Rs 8500</td>
            </tr>
            <tr>
              <td>CT Scan</td>
              <td>Computed Tomography (CT) imaging</td>
              <td>Rs 10000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HospitalSchedule;
