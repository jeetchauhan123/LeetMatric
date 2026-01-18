# LeetMatric 📊

LeetMatric is a **LeetCode statistics visualizer** that allows users to search for a LeetCode username and view their problem-solving progress across **Easy, Medium, and Hard** questions using interactive circular progress indicators.

This project is built using **HTML, CSS, and Vanilla JavaScript** and fetches real-time data from **LeetCode’s GraphQL API**.

---

## 🚀 Features

- Search LeetCode users by username
- Visual progress tracking for:
  - Easy
  - Medium
  - Hard problems
- Circular progress UI using **CSS `conic-gradient`**
- Submission statistics displayed in cards
- Username validation using Regex
- Responsive and clean UI
- No frameworks or build tools required

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LeetCode GraphQL API**
- **CORS Anywhere Proxy** (for development)

---

## ⚠️ Important: CORS Setup Required

LeetCode’s API blocks browser requests due to **CORS restrictions**.  
To make this project work, you must **manually enable temporary access** to the proxy.

### ✅ Steps to Enable CORS Access

1. Open this link in your browser:
https://cors-anywhere.herokuapp.com/

2. Click the button:  
**“Request temporary access to the demo server”**

3. Keep this tab open while using the project.

⚠️ Without this step, the project will NOT fetch user data.

---

## ▶️ How to Run the Project


```bash
### Clone the repository
git clone https://github.com/jeetchauhan123/LeetMatric.git
### Open the project
- Open the folder in **VS Code** or any code editor  
- Open `index.html` directly in your browser  
  *(or use Live Server for a better experience)*

### Use the App
- Complete the **CORS setup** (mandatory)
- Enter a valid LeetCode username  
  **Example username:** `lakshayk12`
- Click **Search**
- View the statistics 🎉
