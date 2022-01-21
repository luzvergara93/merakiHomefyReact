# Meraki Homefy  

## Description

This project was made for a Decoration Brand, as an e-commerce

With this App, the client can choose among different products, see the details of each of them, and select a quantity to buy.
Then, by clicking into the Cart Widget, they can see the order, complete the personal data, and finish the purchase.
An ID will be given to make sure the order was produced.

## What can you find in the code?

### Cart 

##### Includes 

- The body of the Cart, which brings functions from the CartContext to make it work
- The list of products the buyer wants to purchase
- The price of the whole purchase
- A delete button beside each item 
- A button to empty the cart
- A form to introduce data used to create the order
- A button to finally make the order

### CartWidget 

##### Includes

- The Shopping Cart icon, along with the number of products the buyer added to cart. 

### Navbar.js

##### Includes

- Navbar with links to filter the different categories
- Brings user and logout from the UserContext
- Brings notification from the NotificationContext
- Brings setQuantity from the CartContext 

### ItemListContainer.js

##### Includes

- Brings categories using GetProducts function from Firebase
- Function to get the list of products available on the app
- Loader

### ItemList.js

##### Includes

- Mapping of the list of products 

### Item.js

##### Includes

- The body of a card, in order to show the different items with their images
- A Link that goes to the description of each item

### ItemDetailContainer.js

##### Includes

- GetDoc function to get the description of each item

### ItemDetail.js

##### Includes

- The body of the card including the description of each item along with its price, category and stock
- The ItemCount.js and a Link to the cart, to finish the purchase

### ItemCount.js

##### Includes

- The counter that allows the buyer to decide the quantity of each item to buy
- It has functions to add and subtract, and also lets the buyer know when a product is out of stock
- A button for adding the quantity chosen, to cart

### Loader.js

##### Includes

- A loader used in various components, in order to avoid waiting for the functions to load with a blank page.


## Where is the database from?

### Firestore

A database service is used, to get the products, and to store the orders.
If you are not familiar with Firebase you can read the documentation [here](https://firebase.google.com/docs/firestore).

Firestore makes it easy to have everything under control. We use the ID  given to ensure everything works well.

#### What do you have to do in order to make it work?

You have to config a .env document in which you will have your credentials.

#### Cloud Firebase

Here you have the database of the app, in which you can find three collections: categories, items and orders.

Regarding items, in order for them to work in this app, they have to accomplish the following fields: 

-Id : **string** we use the id given by Firebase
-category: **string** choose between one of the categories collection
-description: **string** a brief description used in ItemDetail 
-img: **string** img route
-name: **string** 
-price: **number** 
-stock: **number**

In orders you will find all the different purchases the user makes, with the ids and the user data:

-buyer: the user (name used when logged in)
-comment: comment written in the ContactForm
-date: automatic
-email: also from the ContactForm
-items: a list of the selected items for the purchase
-phone: also from the ContactForm
-total: the total price of the purchase

## Routing

- When going to '/category/:category', the route will filter the category written
- When going to '/detail/:paramId', the route will filter the item with the given id


## Basic App Flow

![App Flow](https://github.com/luzvergara93/merakiHomefyReact/blob/Luz2/public/assets/appFlow.gif?raw=true)

















## Getting Started with my App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

