Ecommerce Backend APP

Click here to see how api's work: https://documenter.getpostman.com/view/44530758/2sB2x6kXL4

A scalable backend service for a supermarket ecommerce platform, built with Node.js, Express, and mongodb. Thwe CI/CD 
Supports product and category management, order processing, shipping cost calculation, and role-based access control (RBAC).

Features
User Authentication & Authorization
JWT-based authentication.
Role-based permissions (Admin, Customer).
Admins can create categories and products.
Product & Category Management
Create, update, delete, and fetch products.
Organize products by category.
Order Management
Add products to cart and checkout.
Calculate subtotal, shipping, and total amounts.
off wat i brought
Shipping cost dynamically calculated via Google Maps API (optional).

Database

mongodb with mongoose.
Scalable database schema for users, products, categories, and orders.

API Documentation
RESTful endpoints with clear request/response formats.

Tech Stack
Backend Framework: Node.js, Express.js
Database: Mongodb
Authentication: JWT, bcrypt
API Testing: Postman
Other: dotenv, cors

ecommerce-backend/
│── controllers/   # Business logic for routes  
│── models/        # Database models/schema  
│── routes/        # API route definitions  
│── middleware/    # Auth & error handling  
│── utils/         # Helper functions  
│── server.js      # App entry point  

Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mydatabase
JWT_SECRET=your_jwt_secret

Installation & Setup
bash
Copy
Edit
# Clone the repo
git clone https://github.com/sheyifash/ecommerce-app.git

# Install dependencies
npm install

# Setup environment variables in .env

Future Improvements
Add payment gateway integration.

Implement product search & filtering.

Add unit & integration tests.

 Author
Oluwaseyi Fashina

