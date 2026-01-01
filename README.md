# Github Links

https://github.com/apna-college/Zerodha [Final Code]

https://github.com/apna-college/zerodha-clone [Branch Wise Commits]

---

# npm packages to install
### 1. npx create-react-app frontend
- After installation react delete few files i.e: readme.md, favicon.ico, remove comment parts from index.html and %PUBLIC_URL%/logo192.png url and %PUBLIC_URL%/favicon.ico and delete logo192 and logo512
- also delete reportWebVitals.js and setupTests.js and logo.svg and App.css and App.js and App.test.js.
- Make some changes in index.js file
    ```
    <React.StrictMode>
        <App />
    </React.StrictMode>
    ```
    change this to -> 
    ```
    <React.StrictMode>
        <div>
            <h1>Hello!</h1>
        </div>
    </React.StrictMode>
    ```
- Remove this links
    - import App from './App';
    - import './index.css';
    - import reportWebVitals from './reportWebVitals';
    - reportWebVitals(); 