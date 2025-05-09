# ✨ AI Code Formatter

A minimal web-based tool that formats JavaScript code using Google's Gemini AI API. Ideal for developers who want quick, clean formatting using style guides like Prettier or Airbnb.

🔗 **Live Site**: [ai-code-formater.vercel.app](https://ai-code-formater.vercel.app)

---

## 📌 Features

- Format JavaScript code using Gemini AI.
- Choose between different style guides (Prettier, Airbnb, StandardJS).
- Clean and responsive UI built with HTML, CSS, and Vanilla JavaScript.
- Uses Vite for development bundling.

---

## 🧠 How It Works

1. You enter JavaScript code into the editor.
2. Select your preferred formatting style.
3. The code is sent to Google's Gemini API with specific prompt instructions.
4. Gemini responds with the formatted version of your code.

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (ES6+)
- **Bundler**: [Vite](https://vitejs.dev/)
- **AI Integration**: [Gemini API](https://makersuite.google.com/)
- **Deployment**: [Vercel](https://vercel.com)

---

## 🔐 Environment Variables

To keep your API key secure and avoid exposing it in version control or the client:

1. Create a `.env` file at the root of your project:

    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

2. Access it in your JavaScript using `import.meta.env`:

    ```javascript
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    ```

3. Make sure to add `.env` to your `.gitignore` file:

    ```gitignore
    .env
    ```

4. On [Vercel](https://vercel.com), go to your project settings → Environment Variables → Add `VITE_GEMINI_API_KEY` for **development**, **preview**, and **production** environments.

---


## 🛠 Setup Instructions

1. Clone this repo
2. Add your Gemini API key
3. Run the app with:
```bash
npm install
npm run dev
