# 🚀 AI Engineer Challenge Frontend

Welcome to the **most awesome** chat interface you've ever seen! This beautiful Next.js frontend connects seamlessly with your FastAPI backend to create an AI-powered chat experience that'll make your friends jealous. ✨

## 🎯 What You're Looking At

This frontend is a **modern, responsive chat interface** that:
- 🤖 Connects to your FastAPI backend for AI chat functionality
- 🎨 Features a gorgeous, glassmorphism design with smooth animations
- ⚡ Supports real-time streaming responses from OpenAI
- 🔧 Includes a settings panel for API key and model configuration
- 📱 Works perfectly on desktop, tablet, and mobile devices
- 🌈 Uses a beautiful color scheme that's easy on the eyes

## 🛠️ Tech Stack

- **Next.js 14** - The React framework that makes everything fast and smooth
- **TypeScript** - Because we like our code to be type-safe and awesome
- **Tailwind CSS** - For styling that looks professional and modern
- **Lucide React** - Beautiful, customizable icons
- **FastAPI Backend** - Your Python backend that handles the AI magic

## 🚀 Getting Started

### Prerequisites

Make sure you have:
- **Node.js 18+** installed on your machine
- **npm** or **yarn** package manager
- Your **FastAPI backend** running (check the `/api` folder)
- An **OpenAI API key** (get one from [OpenAI's website](https://platform.openai.com/api-keys))

### Installation & Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if you prefer yarn:
   # yarn install
   ```

3. **Start your FastAPI backend first:**
   ```bash
   # From the project root, navigate to the api folder
   cd ../api
   
   # Install Python dependencies
   pip install -r requirements.txt
   
   # Start the FastAPI server
   python app.py
   ```
   
   Your backend should now be running on `http://localhost:8000`

4. **Start the frontend development server:**
   ```bash
   # Back in the frontend directory
   cd ../frontend
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 🎮 How to Use

1. **Set up your API key:**
   - Click the settings icon (⚙️) in the top-right corner
   - Enter your OpenAI API key in the password field
   - Choose your preferred model (GPT-4.1 Mini is the default)
   - Customize the system prompt if you want

2. **Start chatting:**
   - Type your message in the input field at the bottom
   - Press Enter or click the send button
   - Watch as the AI responds in real-time with a cool typing animation!

3. **Pro tips:**
   - Use the "Clear Chat" button to start fresh conversations
   - The interface automatically scrolls to new messages
   - Your API key is stored securely in the browser (not sent to any server except OpenAI)

## 🎨 Features That'll Blow Your Mind

- **Real-time streaming:** See the AI's response appear word by word, just like ChatGPT!
- **Beautiful animations:** Smooth transitions and hover effects everywhere
- **Responsive design:** Looks amazing on any device size
- **Error handling:** Graceful error messages when something goes wrong
- **Loading states:** Cool typing indicators while waiting for responses
- **Message timestamps:** Know exactly when each message was sent
- **System prompt customization:** Make the AI behave exactly how you want

## 🔧 Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Project Structure

```
frontend/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main chat interface
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Deployment

This frontend is designed to work perfectly with **Vercel**! Here's how to deploy:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and you'll get a live URL for your app!

## 🐛 Troubleshooting

**"Can't connect to backend" error?**
- Make sure your FastAPI backend is running on `http://localhost:8000`
- Check that the backend is accessible by visiting `http://localhost:8000/api/health`

**"API key not working" error?**
- Double-check your OpenAI API key is correct
- Make sure you have credits in your OpenAI account
- Try a different model if one isn't working

**"Build errors" when deploying?**
- Make sure all dependencies are installed: `npm install`
- Check that your Node.js version is 18 or higher
- Run `npm run build` locally to test the build process

## 🎉 You're All Set!

Now you have a **professional-grade chat interface** that connects to your AI backend! The combination of FastAPI + Next.js + OpenAI is a powerful stack that you can build amazing things with.

**Pro tip:** Try customizing the system prompt to make the AI behave like different personas - a coding assistant, a creative writer, or even a friendly therapist! The possibilities are endless! 🌟

---

*Built with ❤️ for the AI Engineer Challenge*