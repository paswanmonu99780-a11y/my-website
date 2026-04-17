# AI Image Generator - Full Stack Application

A modern, premium AI image generator web application with secure authentication, real-time image generation, and user history management.

## 🌟 Features

### Frontend
- **Landing Page**: Hero section with gradient background and call-to-action buttons
- **Secure Authentication**: Email/password signup with password strength indicator
- **Clean Login**: Remember Me functionality with proper error handling
- **Protected Dashboard**: Modern layout with sidebar navigation
- **Image Generator**: Prompt input with loading animation and preview card
- **Image History**: Gallery view of previously generated images
- **User Profile**: Edit username and view account details
- **Responsive Design**: Mobile-friendly with glassmorphism UI
- **Dark/Light Mode**: Theme toggle for better user experience

### Backend
- **Node.js & Express**: Robust REST API
- **JWT Authentication**: Secure session management
- **MongoDB**: User and image history storage
- **Password Security**: Bcrypt hashing with strength validation
- **Rate Limiting**: API protection against abuse
- **Error Handling**: Comprehensive error messages
- **AI Integration**: Hugging Face API for image generation

## 📁 Project Structure

```
image-generator/
├── frontend/                 # React application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Auth Context
│   │   ├── styles/          # CSS files
│   │   ├── utils/           # Helper functions
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/                  # Node.js Express API
│   ├── src/
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API routes
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Helper functions
│   │   └── config/          # Configuration files
│   ├── server.js            # Entry point
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm
- MongoDB running locally or connection string ready
- Hugging Face API key

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/image-generator
JWT_SECRET=your-super-secret-jwt-key
HUGGING_FACE_API_KEY=your-api-key-here
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

5. Start the backend:
```bash
npm run dev    # Development with auto-reload
npm start      # Production mode
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/check-password-strength` - Validate password strength

### Image Generation
- `POST /api/image/generate` - Generate image (requires auth)
- `GET /api/image/history` - Get user's image history
- `DELETE /api/image/:imageId` - Delete image from history

### User Profile
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## 🔐 Security Features

- **Password Hashing**: Bcrypt with 10 salt rounds
- **JWT Tokens**: 7-day expiration for session management
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Generation Limits**: 5 generations per minute per user
- **CORS Protection**: Whitelist frontend URL
- **Input Validation**: Email and password validation
- **Environment Variables**: Sensitive data protected in .env

## 🎨 Design System

### Color Palette
- Primary: `#7c3aed` (Purple)
- Secondary: `#06b6d4` (Cyan)
- Success: `#10b981` (Green)
- Error: `#ef4444` (Red)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana
- Responsive font sizes for mobile, tablet, desktop

### Modern UI Elements
- Glassmorphism cards with backdrop blur
- Smooth animations and transitions
- Gradient backgrounds
- Box shadows for depth
- Rounded corners (8px-15px)

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🔧 Configuration

### Backend .env Variables
```
PORT                  # Server port (default: 5000)
MONGODB_URI          # MongoDB connection string
JWT_SECRET           # JWT secret key
HUGGING_FACE_API_KEY # AI image generation API key
NODE_ENV             # Environment (development/production)
FRONTEND_URL         # Frontend URL for CORS
```

## 🚨 Error Handling

The application provides comprehensive error messages for:
- Authentication failures
- Validation errors
- Rate limit exceeded
- API failures
- Network errors

## 📈 Performance

- Lazy loading for images
- Skeleton loading states
- Optimized bundle size
- Efficient database queries with pagination
- Frontend caching with localStorage

## 🎯 Future Enhancements

- Social sharing of generated images
- Payment integration for premium features
- Image editing tools
- Batch generation
- Community gallery
- Advanced filters and parameters
- Multi-language support
- Progressive Web App (PWA)

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Support

For issues or questions, please check the individual README files in the frontend and backend directories.

---

**Built with ❤️ for image generation enthusiasts**
