# Micro Frontend React + Node.js Application

## Structure
- `host-app`: Container React app with Header and Footer
- `product-search-mfe`: Micro frontend for product search
- `product-details-mfe`: Micro frontend for product details
- `backend`: Node.js Express backend

## How to Run
Each frontend and backend app can be run separately using `npm start`.
Ensure backend is running before accessing MFEs.

## Module Federation Setup

This project uses Webpack 5 Module Federation.

- `host-app` is the container application.
- `product-search-mfe` and `product-details-mfe` are remote micro frontends.

Each app uses `webpack.config.js` with `ModuleFederationPlugin`.

### To run the full stack:

1. Run the backend:
   ```
   cd backend
   npm install
   npm start
   ```

2. Run each MFE in separate terminals:
   ```
   cd product-search-mfe
   npm install
   npm start
   ```

   ```
   cd product-details-mfe
   npm install
   npm start
   ```

3. Run the host app last:
   ```
   cd host-app
   npm install
   npm start
   ```

Ensure all apps run on separate ports.

## 📦 Micro Frontend Setup Instructions

### 🔧 Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

---

### 🧱 Project Structure
- `host-app`: Shell React app with Header/Footer layout and Module Federation host
- `product-search-mfe`: Remote MFE to list/search products
- `product-details-mfe`: Remote MFE to display product details
- `backend`: Express server with REST API

---

### 🚀 Run Instructions

#### 1. Start the backend (http://localhost:4000)
```bash
cd backend
npm install
npm start
```

#### 2. Start the Search Micro Frontend (http://localhost:3001)
```bash
cd product-search-mfe
npm install
npm start
```

#### 3. Start the Details Micro Frontend (http://localhost:3002)
```bash
cd product-details-mfe
npm install
npm start
```

#### 4. Start the Host Application (http://localhost:3000)
```bash
cd host-app
npm install
npm start
```

---

### 📌 Notes
- All apps use Webpack 5 Module Federation to share/expose components
- TailwindCSS used across all React apps
- React Router v6 for navigation between MFEs
- Backend serves `/api/products` and `/api/products/:id`
