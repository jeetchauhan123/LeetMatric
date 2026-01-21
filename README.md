# LeetMatric 📊

LeetMatric is a **LeetCode statistics visualizer** that allows users to search for a LeetCode username and view their problem-solving progress across **Easy, Medium, and Hard** questions using interactive **circular progress indicators**.

The application is built using **HTML, CSS, and Vanilla JavaScript** and fetches real-time user data from **LeetCode’s GraphQL API**.

---

## 🚀 Features

- 🔍 Search LeetCode users by username
- 📊 Visual progress tracking for:
  - Easy problems
  - Medium problems
  - Hard problems
- 🟢 Circular progress UI using **CSS `conic-gradient`**
- 📈 Submission statistics displayed in cards
- ✅ Username validation using Regex
- 📱 Responsive and clean UI
- ⚡ No frameworks or build tools required

---

## 🛠️ Tech Stack

- **HTML5** – Markup and structure  
- **CSS3** – Styling and progress visualization  
- **JavaScript (ES6+)** – Logic and API integration  
- **LeetCode GraphQL API** – Data source  
- **CORS Anywhere Proxy** – Used to bypass browser CORS restrictions during development  

---

## 🌐 APIs Used

### LeetCode GraphQL API

```text
https://leetcode.com/graphql/
```

## 📊 Data Fetched Using the API

This API is used to fetch:

- Total number of questions by difficulty
- Solved problems by difficulty
- Submission statistics

---

## 🌐 CORS Proxy (Required for Browser Requests)

```text
https://cors-anywhere.herokuapp.com/
```

The application sends requests to:

```
https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql/
```

## ⚠️ Important: CORS Setup Required

LeetCode blocks direct browser requests due to **CORS restrictions**.  
To make this project work locally, you must **manually enable temporary access** to the CORS proxy.

### ✅ Steps to Enable CORS Access

1. Open the following link in your browser:
```text
https://cors-anywhere.herokuapp.com/
```
2. Click the button:
“Request temporary access to the demo server”

3. Keep this tab open while using the application.
⚠️ Without completing this step, the app will NOT fetch user data.

## 📂 Project Structure

```text
LeetMatric/
│
├── index.html      # Main HTML file
├── styles.css      # CSS for layout and progress circles
├── index.js        # JavaScript logic and API calls
└── README.md       # Project documentation
```

## ▶️ How to Run the Project

### 📥 Clone the Repository

```bash
git clone https://github.com/jeetchauhan123/LeetMatric.git
```

### 📂 Open the Project

- Open the folder in **VS Code** or any code editor  
- Open `index.html` directly in your browser  
  *(Using Live Server is recommended for a better experience)*

---

## 🧪 Using the Application

1. Complete the **CORS setup** (mandatory)
2. Enter a valid LeetCode username  
   **Example username:** `lakshayk12`
3. Click **Search**
4. View your LeetCode statistics 🎉

---

## 🔐 Username Validation Rules

- Username must not be empty
- Allowed characters:
  - Letters (A–Z, a–z)
  - Numbers (0–9)
  - `_` and `-`
- Maximum length: **15 characters**

---

## 📊 Data Displayed

- ✅ Total problems solved by difficulty
- 📊 Circular progress showing **Solved / Total**
- 📈 Submission statistics:
  - Overall submissions
  - Easy submissions
  - Medium submissions
  - Hard submissions

---

## ❗ Limitations

- Requires manual CORS proxy activation
- Depends on a third-party proxy service
- Limited error handling for:
  - Non-existent usernames
  - Private or restricted profiles

---

## 🔮 Future Improvements

- 🚫 Remove CORS proxy dependency using a backend
- ⏳ Add loading animations
- 📱 Improve mobile responsiveness
- 🧩 Display recent submissions
- 🧠 Show user profile details (rank, badges)

---

## 📄 License

This project is open-source and intended for **learning and educational purposes**.

---

## 🙌 Acknowledgements

- **LeetCode** for providing the GraphQL API
- **CORS Anywhere** for enabling cross-origin requests
