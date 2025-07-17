# CRM Dashboard

A modern, responsive CRM dashboard built with React, Vite, and Tailwind CSS. This project demonstrates a modular frontend architecture with charts, tables, and dark mode support.

---

## 🚀 How to Run the Project

1. **Install dependencies**
  
   ```
   yarn install
   ```

2. **Start the development server**
  
   ```
   yarn dev
   ```
   The app will be available at the local address shown in your terminal (typically http://localhost:5173).

3. **Build for production**
   ```
   npm run build
   ```
   or
   ```
   yarn build
   ```

4. **Preview the production build**
   ```
   npm run preview
   ```
   or
   ```
   yarn preview
   ```

---

## 🛠️ Tech Stack Used

- **React** (v19) — UI library for building user interfaces
- **Vite** — Fast build tool and development server
- **Tailwind CSS** — Utility-first CSS framework for styling
- **Chart.js** & **react-chartjs-2** — For rendering charts and data visualizations
- **React Icons** — For iconography
- **ESLint** — For code linting and quality
- **Other**: Modern JavaScript (ES2020+), functional components, hooks

---

## 📋 Assumptions & Decisions

- **No backend**: This dashboard is frontend-only; all data is static or stored in localStorage for demo purposes.
- **Theme support**: Light and dark mode are supported via a toggle in the Navbar. The theme preference is saved in localStorage.
- **Responsiveness**: The UI is responsive and adapts to different screen sizes, with special handling for mobile layouts.
- **Component structure**: The dashboard is modular, with reusable components for cards, charts, and tables.
- **Data**: Demo data for charts, orders, and account info is hardcoded in the `src/utils/constatnts.js` file.
- **No authentication**: User info is static and for demonstration only.
- **Modern tooling**: Vite is used for fast development and build times; Tailwind CSS for rapid UI development.

---

## 📁 Project Structure

```
crm-dashboard/
  ├── public/                # Static assets
  ├── src/
  │   ├── components/        # React components
  │   ├── utils/             # Utility functions and constants
  │   ├── App.jsx            # Main app component
  │   └── main.jsx           # Entry point
  ├── package.json           # Project metadata and scripts
  └── tailwind.config.js     # Tailwind CSS configuration
```

---


