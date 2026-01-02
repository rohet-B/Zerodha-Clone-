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

# Starting with the code 
## Try to study the website structure to find out components to make.
### 1. Create Different section folders that is for Home, About, pricing etc inside a Landing page folder.
### 2. Inside Home Create Awards.js, Education.js, Hero.js etc components.
### 3. Create Footer.js and OpenAccount.js components inside landing page folder since they will be used in other components so that other components can access them.
### 4. Like this create various Components.
