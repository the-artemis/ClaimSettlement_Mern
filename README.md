# Claim Settlement Project

This project is designed to facilitate the claim settlement process, allowing frontend users to apply for a claim, view their policies and claims status. Third-Party Administrators (TPA) can verify the status of claims and view hospital SOC (Statement of Charges). Administrators can also verify and update the status of claims, which will be reflected in the user's portal.

## Features

- **User Portal**:
  - Apply for a claim
  - View policies
  - Check claim status

- **TPA Portal**:
  - Verify claim status
  - View hospital SOC

- **Admin Portal**:
  - Verify and update claim status

## Technology Stack

- **Backend**:
  - MongoDB Atlas for the database
  - Node.js for API development

- **Frontend**:
  - React for building user interfaces
  - Bootstrap for responsive design

## Functionality

- **User Management**:
  - Create, update, and delete user accounts
  - Authenticate users securely

- **Policy Management**:
  - Create, update, and delete insurance policies
  - Associate policies with users

- **Claim Management**:
  - Apply for a claim
  - Update claim status
  - View claim history

## Installation

# Clone the repository
git clone <repository_url>

# Navigate to the project directory
cd claim-settlement-project


# Set up environment variables
# Create a .env file in the root directory
# Define variables such as MongoDB connection string, JWT secret, etc.

# Navigate to the servet directory
cd server

# Install dependencies
npm install

# Run the backend server
npm start

# Navigate to the client directory
cd client

# Install frontend dependencies
npm install

# Run the frontend server
npm start


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
