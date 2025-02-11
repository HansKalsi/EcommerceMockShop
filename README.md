# EcommerceMockShop

## Project Overview
This is a quick (4-6 hour) project with the goal of creating an ecommerce website that primarily has a product page, persistent mini-basket, uses the [Mock.shop API](https://mock.shop/), and is responsive.

## Setup Instructions
No setup required:
- View the code via the [GitHub Repo](https://github.com/HansKalsi/EcommerceMockShop)
- View the deployed [Vercel website](https://ecommerce-mock-shop.vercel.app/)

To run locally:
- npm run dev

## Technical Decisions and Reasoning
### Step 1
- Setup codebase with Vite and React
- Scaffold basic test for loading of the navigation
- Scaffold basic test for loading of a product
- Scaffold basic test for Incrementing product quantity in basket
- Scaffold basic test for deleting product from basket
- Scaffold integration test for navigating to Products page and adding the first product to the basket and check the basket contains exactly one of that product
### Step 2
- Setup navigation bar (desktop) with Home, Products, About
    - Use React Rotuer routing for switching tabs/pages
- Formalise navigation test
- Top right setup a floating basket icon
    - Open basket sidepanel (right) when clicked (blank for now)
- Setup Github action to run tests when pushing
### Step 3
- Create Product component
- Formalise product test
- Create Products page
    - Add a ‘view more’ button to the bottom of the page to load more products
### Step 4
- Create Basket component
    - useContext so the basket data can be shared between components (+localStorage to save session)
- Formalise basket tests
- Create Basket overview component
### Step 5
- Create integration test for full lifecycle (go to products, add first product, increase via basket by one, check total cost, go to ‘purchase screen’, complete purchase, check basket when autoredirected to home page)
### Step 6
- Host app to Vercel

## Potential improvements if given more time
- Setup Vitest Code Coverage to ensure testing covers all code
- When hovering basket icon show a mini overview of items in basket
- Incorperate infinite scrolling to load more products
- Add more obvious UI that there are more items in basket for better UX
- Add burger navigation to allow for navigation in mobile
- Close sidepanel when clicking elsewhere
- Create ‘Purchase Screen’ component so the user can checkout their cart/basket
- UX improvement: When adding a product to the basket, have a ‘fairy’ (aka a bubble) of the image float up to the top right of the screen (to show it being added)
- Add testimonials section to Home page (gives user assurance of quality)
- Add a ‘on the way’ section to the home page so the user can see what they’ve ordered (add a warning that unless logged in this information may disappear (which it will when the cache is deleted))
- Lazy loading where possible
- Create Product modal
    - In desktop, when hovering (not when focused to avoid keyboard user annoyance) a product, it focuses attention on that product via a ‘mini modal’, this will have buttons available to amend basket, remove from basket, and add to basket.
- Add light/dark mode option
