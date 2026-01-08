# Microverse - 2-3 Day E-commerce Task List

## Project: E-commerce Micro Frontend
**Goal:** Build a working e-commerce UI with Host + 2 Remotes (Products, Cart)
**APIs:** Fake Store API (https://fakestoreapi.com/) - No custom backend needed

---

## Day 1: Setup & First Remote

### ✅ Task 1: Install Dependencies
- Install Yarn: `npm install -g yarn`
- Run `yarn install` at root
- Install React, Webpack, Module Federation in host + remotes
- Install shared UI dependencies

### ✅ Task 2: Configure Module Federation (Host)
- Setup webpack.config.js in host
- Configure ModuleFederationPlugin as consumer
- Setup React Router for navigation
- Create basic shell layout (header, footer, main content area)

### ✅ Task 3: Create Products Remote
- Setup webpack.config.js in remotes/products
- Configure ModuleFederationPlugin to expose components
- Create ProductList component (fetch from Fake Store API)
- Create ProductCard component
- Expose components: `./ProductList`, `./ProductCard`

### ✅ Task 4: Connect Host → Products Remote
- Import Products remote in host
- Lazy load ProductList component
- Create route `/products` that loads remote
- Test: Products should display from API

---

## Day 2: Second Remote & Communication

### ✅ Task 5: Create Cart Remote
- Setup webpack.config.js in remotes/cart
- Configure ModuleFederationPlugin to expose components
- Create Cart component (local state for now)
- Create CartItem component
- Expose components: `./Cart`, `./CartIcon`

### ✅ Task 6: Add to Cart Communication
- Use Custom Events for Host ↔ Remotes communication
- Products remote: Emit "add-to-cart" event with product data
- Cart remote: Listen for "add-to-cart" events
- Host: Pass events between remotes
- Test: Add product → Cart updates

### ✅ Task 7: Shared UI Library
- Create Button, Card, Input components in shared/ui
- Export from shared/ui package
- Import in both remotes
- Replace custom components with shared ones

### ✅ Task 8: Dev Workflow Setup
- Test running remotes independently: `yarn workspace @microverse/products dev`
- Test running host: `yarn workspace @microverse/host dev`
- Setup concurrent dev script (optional): Run all at once
- Test HMR: Change Products → See update in Host

---

## Day 3: Testing & Deployment

### ✅ Task 9: Basic Testing
- Test Products remote standalone (should work without host)
- Test Cart remote standalone
- Test Host loading both remotes
- Manual testing: Add products, view cart, navigation

### ✅ Task 10: Build for Production
- Build all workspaces: `yarn workspaces run build`
- Test production builds locally
- Verify remote URLs are correct in host config

### ✅ Task 11: Deploy to Vercel/Netlify
- Deploy Products remote → Get URL
- Deploy Cart remote → Get URL  
- Update Host config with production remote URLs
- Deploy Host → Final app works!

### ✅ Task 12: Documentation & Demo
- Update README with setup instructions
- Add screenshots/GIF of working app
- List what you learned (Module Federation, monorepo, etc.)

---

## Quick Reference

**Public API:** https://fakestoreapi.com/
- GET `/products` - All products
- GET `/products/:id` - Single product
- GET `/products/category/:name` - Products by category

**Key Commands:**
- `yarn install` - Install all dependencies
- `yarn workspace @microverse/host dev` - Run host
- `yarn workspace @microverse/products dev` - Run products remote
- `yarn workspace @microverse/cart dev` - Run cart remote
- `yarn workspaces run build` - Build all

**File Structure:**
```
host/src/App.js          # Main shell with routing
remotes/products/src/    # ProductList, ProductCard components
remotes/cart/src/        # Cart, CartIcon components
shared/ui/src/           # Button, Card, Input components
```
