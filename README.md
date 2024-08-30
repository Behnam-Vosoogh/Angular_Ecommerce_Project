# Angular E-commerce Project

This is an Angular-based e-commerce project that allows sellers to add products and manage their inventory. The project includes authentication for sellers and a user-friendly interface for managing products.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project is an e-commerce platform built with Angular. It allows sellers to sign up, log in, and manage their products. Sellers can add new products, update existing ones, and delete products from their inventory.

## Features

- Seller authentication (sign up and log in)
- Add, update, and delete products
- Responsive design
- User-friendly interface

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

3. **Run the development server:**

   ```bash
   ng serve
   ```

4. **Open your browser and navigate to:**
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
