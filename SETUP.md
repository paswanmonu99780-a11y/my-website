# 🚀 Setup & Launch Guide

Welcome to the AI Image Generator! This guide will help you get started.

## ⚙️ Prerequisites

- **Node.js** 14+ and npm ([Download](https://nodejs.org))
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud)
- **Hugging Face API Key** ([Sign up free](https://huggingface.co))

## 🔧 Step 1: Configure Backend

### 1.1 Navigate to backend directory
```bash
cd backend
```

### 1.2 Create environment file
```bash
cp .env.example .env
```

### 1.3 Update `.env` with your configuration

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/image-generator
JWT_SECRET=generate-a-random-secure-string-here
HUGGING_FACE_API_KEY=your-hugging-face-api-key
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Where to get each:**
- `MONGODB_URI`: Local MongoDB or create a [free cluster on MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- `JWT_SECRET`: Use any long random string (e.g., `openssl rand -base64 32`)
- `HUGGING_FACE_API_KEY`: Get free API key from [HuggingFace](https://huggingface.co/settings/tokens)

### 1.4 Start backend server
```bash
npm run dev    # Development (with auto-reload)
npm start      # Production
```

✅ Backend will be running at `http://localhost:5000`

## 🎨 Step 2: Configure Frontend

### 2.1 Navigate to frontend directory
```bash
cd frontend
```

### 2.2 Start frontend development server
```bash
npm start
```

✅ Application will open at `http://localhost:3000`

## 📋 Available Tasks in VS Code

Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and select "Tasks: Run Task":

- **Backend: Start Development Server** - Run backend with auto-reload
- **Frontend: Start Development Server** - Run React development server
- **Frontend: Build for Production** - Create optimized production build
- **Backend: Install Dependencies** - Install backend packages
- **Frontend: Install Dependencies** - Install frontend packages

## 🧪 Testing the Application

1. **Visit Landing Page**: Go to `http://localhost:3000`
2. **Sign Up**: Click "Get Started" and create an account
3. **Login**: Use your credentials to log in
4. **Generate Image**: Enter a prompt (e.g., "A beautiful sunset over mountains")
5. **View History**: Check your previously generated images
6. **Manage Profile**: Edit your username

## 🔐 Database Setup (Optional but recommended)

If using **MongoDB Atlas**:

1. Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free tier cluster
3. Get connection string
4. Replace `MONGODB_URI` in `.env`

Example connection string:
```
mongodb+srv://username:password@cluster.mongodb.net/image-generator
```

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is available: `netstat -ano | findstr :5000`
- Ensure MongoDB is running
- Verify `.env` file has all required variables

### Frontend won't start
- Check if port 3000 is available
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `npm install`

### MongoDB connection error
- Verify MongoDB is running locally
- Check connection string in `.env`
- For MongoDB Atlas, ensure IP is whitelisted

### API key issues
- Verify Hugging Face API key is valid
- Check rate limits haven't been exceeded
- Ensure `HUGGING_FACE_API_KEY` is set in backend `.env`

## 📚 API Documentation

See [backend/README.md](backend/README.md) for detailed API endpoints.

## 🎨 Customization

### Change Color Theme
Edit `frontend/src/styles/index.css` to modify the CSS variables:
```css
:root {
  --primary: #7c3aed;        /* Main purple */
  --secondary: #06b6d4;      /* Cyan accent */
  --success: #10b981;        /* Green */
  --error: #ef4444;          /* Red */
}
```

### Modify API Configuration
Update API endpoints in `frontend/src/context/AuthContext.js` if backend URL changes

## 🚀 Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy the 'build' folder to Vercel, Netlify, or any static host
```

### Backend
```bash
# Set NODE_ENV=production in .env
# Deploy to Heroku, Railway, AWS, or any Node.js host
```

## 📖 Documentation

- [Main README](README.md) - Project overview
- [Backend README](backend/README.md) - API documentation
- [Frontend README](frontend/README.md) - Frontend setup

## 💡 Tips

- Enable dark mode for better late-night usage
- Use "Remember Me" to stay logged in
- Check your history to see all generated images
- Copy image links to share with others

## 🎯 Next Steps

1. Start the backend: `cd backend && npm run dev`
2. Start the frontend: `cd frontend && npm start`
3. Visit `http://localhost:3000`
4. Create an account and start generating!

---

**Happy creating! 🎨✨**
