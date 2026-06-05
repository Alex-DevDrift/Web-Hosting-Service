# Web Hosting Service (Next.js Application)

Welcome to the Web Hosting Service application! This project was seamlessly migrated from a static HTML template into a modern **React + Next.js 15 (App Router)** architecture while retaining all of the original design aesthetics, plugins, and functionality.

## 🚀 Quick Start (Windows)

We've made starting the application extremely easy for Windows users.

1. **Install Dependencies**
   Before running the app for the first time, make sure you have [Node.js](https://nodejs.org/) installed, and install the project dependencies by opening your command prompt in this directory and running:
   ```bash
   npm install
   ```

2. **Run the Application**
   Simply double-click the **`run.bat`** file located in the root folder (`D:\My Projects\GitHub-Projects\Web-Hosting-Service\run.bat`).
   
   This script will automatically:
   - Start the Next.js development server in the background.
   - Wait for the code to compile.
   - Open your default web browser to [http://localhost:3000](http://localhost:3000).

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Vanilla CSS, Bootstrap
- **Scripts**: jQuery, Slick Carousel, WOW.js, Magnific Popup

> **Note on Architecture:** For an in-depth look at how the file paths are structured and how the Next.js layouts wrap each page component, please check out the **[FINAL_ARCHITECTURE.md](./FINAL_ARCHITECTURE.md)** file!

## 📁 Key File Locations

If you want to modify the content of any page, navigate directly to its specific folder inside `src/app/`. Each page has been broken out into its own standalone React component:

- **Home Page**: `src/app/page.js`
- **About Page**: `src/app/about/page.js`
- **Services Page**: `src/app/services/page.js`
- **Blog Page**: `src/app/blog/page.js`
- **Blog Details**: `src/app/blog-details/page.js`
- **Contact Page**: `src/app/contact/page.js`

**Global Components:**
Headers, Footers, and Preloader components are located in `src/app/components/` and are automatically injected into every page via the `src/app/layout.js` file.

**Public Assets:**
All CSS, images, and fonts from the legacy version are served statically from the `public/assets/` directory. Do not delete the `public/assets/fonts/` folder, as it powers all of the social media logos and UI arrows across the site!

## 🔧 Manual Commands

If you prefer using the terminal over `run.bat`, you can use the standard Next.js commands:

- Start the development server: `npm run dev`
- Build the project for production: `npm run build`
- Start the production server: `npm run start`
