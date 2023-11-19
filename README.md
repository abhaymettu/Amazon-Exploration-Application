# Amazon Exploration Application

## Project Description

The Amazon Exploration Application is a comprehensive mapping and community engagement tool designed to empower Amazonian communities. Developed as part of the [AmazoniaHack](https://amazoniahack.co/), this application facilitates collaborative mapping, resource management, territorial advocacy, and cultural preservation. It is specifically tailored to address challenges like limited internet access and varying levels of digital literacy among Amazonian communities.

## Key Functionalities

- **Map Integration**: Utilizes Leaflet to provide an interactive mapping interface, focusing on the Amazon region.
- **Community Engagement**: Allows for user authentication and community-driven contributions through Firebase Authentication.
- **Data Submission**: Users can submit data including titles, descriptions, locations, and images, which are then synchronized to a server.
- **Offline Capabilities**: Supports offline map access and data synchronization, ensuring functionality in areas with limited internet connectivity.
- **Server-Side Processing**: Employs Node.js with Express.js and MongoDB for backend data management, including API endpoints for data submission and retrieval.
- **Interactive Elements**: Users can view, comment on, and interact with the contributions of others, fostering community collaboration.
- **User-Friendly Interface**: Designed with an intuitive UI, ensuring accessibility for users with varying levels of digital literacy.
- **Security and Privacy**: Adopts measures to ensure the security and privacy of user data.


## Setup and Installation

To set up the Amazon Exploration Application, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abhaymettu/Amazon-Exploration-Application.git
   cd Amazon-Exploration-Application
   ```

2. **Install Dependencies:**
   - For the server:
     Navigate to the server directory and install dependencies like Express, Mongoose, body-parser, and cors.
     ```bash
     cd server
     npm install express mongoose body-parser cors dotenv
     ```
   - For the client:
     Navigate to the client directory and install React-related dependencies, including React-Leaflet for map integration and Axios for making HTTP requests.
     ```bash
     cd client
     npm install react react-dom react-leaflet leaflet axios firebase
     ```

3. **Environment Configuration:**
   - Set up your `.env` file in the server directory with necessary configurations (e.g., database URI, API keys).

4. **Run the Application:**
   - Start the server:
     ```bash
     cd server
     node server.js
     ```
   - In a new terminal, start the client:
     ```bash
     cd client
     npm start
     ```

