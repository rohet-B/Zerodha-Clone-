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
    <!-- if custom css is not required then removed index.css -->
    - import './index.css'; 
    - import reportWebVitals from './reportWebVitals';
    - reportWebVitals(); 

# Starting with the code 
## Try to study the website structure to find out components to make.
### 1. Create Different section folders that is for Home, About, pricing etc inside a Landing page folder.
### 2. Inside Home Create Awards.js, Education.js, Hero.js etc components.
### 3. Create Footer.js and OpenAccount.js components inside landing page folder since they will be used in other components so that other components can access them.
### 4. Like this create various Components.
### 5. To auto import react component, just create a file inside main root folder with name "jsconfig.json" and add this line:
```
{
    "exclude": ["node_modules"]   
}
```
### 6. Load these components inside index.js file like this
```
<React.StrictMode>
        <Homepage/>
</React.StrictMode>
```
### 7. Import Bootstrap links and font awesome link into public > index.html
### 8. Inside public folder create a folder media > images folder for using images.
### 9. React Router Setup to enable routing between different sub pages in website.
- Install react router - npm i react-router-dom
- Routing setup would happen in index.js file:
    - import {BrowserRouter, Routes, Route} from 'react-router-dom';
    - import <Components> from {address}
    ```
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>      
          <Route path="/signup" element={<Signup/>}/>      
          <Route path="/about" element={<AboutPage/>}/>      
          <Route path="/product" element={<ProductsPage/>}/>      
          <Route path="/pricing" element={<Pricing/>}/>      
          <Route path="/support" element={<SupportPage/>}/>      
        </Routes>
    </BrowserRouter>
    ```
### 10. Since we are using Navbar and Footer in each page we can use their components directly inside index.js file rather than specifically adding them in each component

### 11. Once React router setup is done, now make modification to links in Navbar.js.
- import {Link} from "react-router-dom";
- replace `<a>` tag with `<Link>` tag
- if external link then use `<a>` tag, and if internal link use `<Link>` tag 
- replace `href` with `to`

### 12. When user type unrecognised link website must show not found page
- Create NotFound.js file inside Landing page and write your content
- Go to index.js file
- Make a route with `path="*"` and `element={<NotFound/>}`

### 13. Working with database
- Go to [MongoDB Website](https://www.mongodb.com/).
- Create a new Project
- Create a cluster (Version Free)
- Go to Security QuickStart
    - Create a database user
    - Under Add entries to your IP Access List, add this `0.0.0.0/0`
- Connecting Database to our backend:
    - Go to backend folder and run this command: `npm init` or `npm init -y`
    - Now we have to edit `package.json` inside backend:
        ```
            "test": "echo \"Error: no test specified\" && exit 1"
        ```
    - Replace this with this:
        ```
            "start":"nodemon index.js"
        ```
    - Again run this command: `npm i -D nodemon` where -D means developer dependencies
    - now install some other packages: `npm i express body-parser cors dotenv mongoose passport passport-local passport-local-mongoose` where passport help us for sign up and login, and it need some other sub packages for  implementation i.e passport-local & passport-local-mongoose.
    - Now Create a `index.js` file, write code and run using `nodemon index.js` or `npm start`.
    - Now Create a `.env` file.
    - Go to your `cluster` and press `connect` and select `Drivers` Now from this window copy the url and paste it in .env file like this MONGO_URL = "link" and replace some parts of link with informations told during cluster connection.
    - Now require the .env in index.js like this `require('dotenv').config();`
    - And build you connection with mongodb.

### 14. Creating mongo schema
1. Create 2 folders `schemas` & `model`
2. Make schema inside `schemas`folder first:
    ```
        const {Schema} = require("mongoose");
        const HoldingsSchema = new Schema({
            name: String,
            qty:Number,
            avg:Number,
            price:Number,
            net:String,
            day:String,
        });

        module.exports = {HoldingsSchema}
    ```
3. Make `models` now:
    ```
        const {model} = require("mongoose");
        const {HoldingsSchema} = require('../schemas/HoldingsSchema');

        const HoldingsModel = new model("holding",HoldingsSchema);

        module.exports = {HoldingsModel}
    ```
### 15. To insert dummy data:
1. Create a simple temporary API route:
    ```
        const {HoldingsModel} = require('./model/HoldingsModel')
        // Inserting Dummy data
        app.get('/addHoldings',async(req,res)=>{
            let tempHoldings = [
        {
            name: "BHARTIARTL",
            qty: 2,
            avg: 538.05,
            price: 541.15,
            net: "+0.58%",
            day: "+2.99%",
        },
        ];
            tempHoldings.forEach((items)=>{
                let newHolding = new HoldingsModel({
                    name: items.name,
                    qty:items.qty,
                    avg:items.avg,
                    price:items.price,
                    net:items.net,
                    day:items.day,
                });
                newHolding.save();
            });
            res.send("Done!");
        });
    ```
2. Now open localhost `3000/addHoldings` and import data. 
3. Now comment out the API you made for inserting dummy data.

### 16. Now Bringing Data to the frontend:
1. For this we first need an API that fetches data from the database:
    ```
        const { HoldingsModel } = require('./model/HoldingsModel');
        const { PositionsModels } = require('./model/PostionsModel');

        app.get('/allHoldings',async (req,res)=>{
            let allHoldings = await HoldingsModel.find({});
            res.json(allHoldings);
        });

        app.get('/allPositions',async (req,res)=>{
            let allPositions = await PositionsModels.find({});
            res.json(allPositions);
        });
    ```
2. Once an API is made that fetches data from database now we have to connect with frontend for this we have to go to that component that is using dummy data to show in frontend (here we have to go `Holdings.js` file in `dashboard` folder)
    ```
        import React from "react";
        // import { holdings } from "../data/data";
        // holdings → an array of stock objects coming from data.js

        // Commenting the 2nd line of code since we are adding database
        import { useState, useEffect } from "react";
        const Holdings = () => {
            const [allHoldings, setAllHoldings] = useState([]);

            useEffect(()=>{
        
            },[]);
        return (
            <!-- further code -->
        )
        }
    ```
3. Once this above process done install a new package inside `frontend` folder known as `axios`:
    `npm i axios`
4. Now below code:
    ```
        // Commenting the 2nd line of code since we are adding database
        import { useState, useEffect } from "react";
        import axios from 'axios';
        const Holdings = () => {

        const [allHoldings, setAllHoldings] = useState([]);
        useEffect(()=>{
        // since project isn't deployed we give this link once project is deployed given another link.
        axios.get("http://localhost:3000/allHoldings")
        .then((res)=>{
            console.log(res.data)
            setAllHoldings(res.data);
        })
        },[])
        return (
            <>
            </>
        )}
    ```
5. Also in index.js file setup `bodyParser` & `cors`:
    ```
        const bodyParser = require('body-parser');
        const cors = require("cors");
        app.use(cors());
        app.use(bodyParser.json());
        // This 2 are middlewares and must come before Routes.
    ```
6. Now run `frontend` & `backend` in 2 different terminals.

### 17. Now How to implement Authorization & Authentication can be learn from this blog post. [MERN Security](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/)

### 18. Deployment platforms:
1. Render
2. Netlify
3. Vercel
``` 
Note: If a project has three parts—frontend, backend, and dashboard—then each part must be deployed separately on different servers.
```
---
The End 
:) 