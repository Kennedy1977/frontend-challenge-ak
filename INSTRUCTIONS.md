# Frontend Developer Challenge
This challenge is designed to demonstrate your skills in frontend web development, including JS, ES6, React, SCSS and so on.

We recommend you spend a couple of hours on this challenge.

You should create a private repository on Github and share it with https://github.com/dancryer - Make regular commits as you work through the
problem and push them to your repository. We'll use this to assess your process and how you solved problems along the way.

## Scenario
You've been tasked to redesign and rebuild our website's product listing pages. The new pages should be built using React to improve our 
code quality and reusability.

The new listing pages must work within the existing mock template found in `public/index.html`.

There's also the opportunity to recover existing technical debt by cleaning up the inline CSS in the template, if you get chance.

## What you should produce
You should produce a set of **function based** React components to implement the new listing pages. `resources/js/app.js` contains stub code to
instantiate your primary component. You should update this script to reference your new component.

### Specific guidance:
* The new listing pages should use a grid layout with one "box" per product, as opposed to a row-based listing layout. 
* The React components should pull the product listings from the `products.json` "API". 
* Each listing should show a title, image, availability, stock and price.
  * If there are more than 20 of an item in stock, use the messaging "20+ in stock"
  * If there are less than 5 of an item in stock, use the messaging "Less than 5 left, order yours now"
  * If there are no items in stock, use the messaging "Out of stock right now"
  * If an item can be delivered tomorrow, use the messaging "Order now, get it tomorrow" - otherwise show an estimated delivery date.
* In order to link to an item, you should use the URL format `/products/{code}`
* You should also include an add to basket button, which needs to be "G4M orange." You'll be passed a prop `addToBasket` which will handle this, it takes one parameter: `id`.

## Notes
* Make as much progress as you can in the time allowed. You're not required to produce a final product!
* Don't worry too much about appearance, we'll be focusing mostly on code quality, structure, project quality, etc. 
* Don't spend too long on fancy build pipelines! We *do* need to be able to build and run your challenge and it does need to work, but we're not assessing your webpack abilities.
* Do think about the "other developer" - document what you've done and make sure there are instructions for building your solution.
