# Angular E-commerce Project

Welcome to the Angular E-commerce Project! This project is a fully functional e-commerce web application built using Angular. It showcases a variety of features including product listing, search functionality, user authentication, and a shopping cart system.
![Angular E-commerce Project]([https://github.com/Behnam-Vosoogh/Angular_Ecommerce_Project/blob/3f646594aff95dfb3376d979cd9de506635be84c/ScreenShot.png])

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Listing**: Browse a list of products with details such as name, price, color, category, and description.
- **Search Functionality**: Search for products using keywords.
- **User Authentication**: Separate login for users and sellers.
- **Shopping Cart**: Add products to the cart and view the cart contents.
- **Seller Dashboard**: Sellers can add new products, view their product list, and manage their inventory.
- **Responsive Design**: The application is designed to be responsive and works well on both desktop and mobile devices.

## Technologies Used

- **Angular**: Frontend framework for building dynamic web applications.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **RxJS**: Library for reactive programming using observables.
- **Angular Router**: For navigation and routing.
- **FontAwesome**: For icons and visual enhancements.
- **Bootstrap**: For responsive design and styling.
- **LocalStorage**: For storing cart data and user sessions.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/angular-ecommerce.git
   cd angular-ecommerce
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install JSON Server:**

   ```bash
   npm install -g json-server
   ```

4. **Create a `db.json` file with initial data:**

   ```json
   {
     "products": []
   }
   ```

5. **Run JSON Server:**

   ```bash
   json-server --watch db.json
   ```

6. **Run the development server:**

   ```bash
   ng serve
   ```

7. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

## Usage

### Adding a Product

1. Navigate to the seller authentication page and log in.
2. Go to the "Add Product" page.
3. Fill in the product details, including the description and image URL.
4. Click the "Add Product" button to add the product to your inventory.

### Example Code Snippet

Here is an example of the HTML code for adding a product:

```html
<textarea type="text" class="form-input" placeholder="Enter Product Description" name="description" ngModel></textarea>
<input type="text" class="form-input" placeholder="Enter Product Image URL" name="image" ngModel />
<button class="form-button" type="submit">Add Product</button>
```
