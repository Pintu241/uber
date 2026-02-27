📌 Project Overview
Uber Clone is a full-stack ride-booking web application that allows users to book rides, drivers to accept requests, and track rides in real time. The project replicates core functionalities of Uber including authentication, ride booking, live tracking, and payment integration.

🚀 Features
👤 User Features
User Registration & Login (JWT Authentication)

Book a Ride (Pickup & Drop Location)

Fare Estimation

Real-time Ride Tracking

Ride History

Secure Logout

🚗 Driver Features
Driver Registration & Login

Accept/Reject Ride Requests

Update Ride Status (Arrived, Started, Completed)

Earnings Dashboard

⚙️ Admin Features (Optional)
Manage Users & Drivers

Monitor Active Rides

View Reports & Analytics

🛠️ Tech Stack
Frontend
React.js

Tailwind CSS / Bootstrap

Axios

Google Maps API

Backend
Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Bcrypt (Password Hashing)

Socket.io (Real-time communication)

📂 Project Structure
Code

uber-clone/
│
├── client/                 # Frontend (React)
│   ├── src/
│   └── package.json
│
├── server/                 # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
└── README.md
🔐 Environment Variables
Create a .env file inside the server folder and add:

Code

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_MAPS_API_KEY=your_api_key
⚡ Installation & Setup
1️⃣ Clone the Repository
Bash

git clone https://github.com/Pintu241/uber-clone.git
cd uber-clone
2️⃣ Install Backend Dependencies
Bash

cd server
npm install
3️⃣ Install Frontend Dependencies
Bash

cd client
npm install
4️⃣ Run the Application
Run Backend:

Bash

cd server
npm run dev
Run Frontend:

Bash

cd client
npm start
🔄 API Endpoints (Sample)
Auth Routes
POST /api/register

POST /api/login

Ride Routes
POST /api/rides/create

GET /api/rides/history

PATCH /api/rides/update-status

🗺️ Future Improvements
Stripe Payment Integration

Push Notifications

Ride Scheduling

Rating & Review System

Admin Dashboard Analytics

📸 Screenshots
(Add screenshots here)

👨‍💻 Author
Pintu
GitHub: https://github.com/Pintu241

📄 License
This project is licensed under the MIT License.
