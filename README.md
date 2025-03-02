# MERN Job Portal

A full-stack job portal application built using the MERN stack, where recruiters can post jobs and companies, and users can view and apply for job openings. 

# Live Link 
You can access the live version [here](https://mern-job-portal-puce.vercel.app/).


## Features

### Recruiter Panel:
- Recruiters can create and manage company profiles.
- Recruiters can post job listings and manage job posts.
- Secure authentication for recruiters.

### User Panel:
- Users can view available jobs.
- Users can apply to job listings.
- Users can create profiles and manage applications.

## Tech Stack
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **File Uploads**: Cloudinary for image/file storage

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/ps8847/Mern_jobPortal.git
cd Mern_jobPortal
```

### 2. Install dependencies:
For both the backend and frontend, install the necessary dependencies:

```bash

cd frontend
npm install

cd backend
npm install

```

### 3. Environment Variables:
Create a .env file in the root directory of your backend and add the following environment variables:

```bash
SECRET_KEY=your_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
MONGO_URI=your_mongo_db_connection_string
PORT=3000
```

### 4. Running the Application:
Start both the backend and frontend using the following command:

```bash

cd frontend
npm run dev

cd backend
npm run dev

```

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.