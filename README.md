# Apartment Rental

Apartment Rental is a React + Vite project for browsing and managing apartment listings. It includes a listing grid, apartment details page, update form, dashboard, and an about page.

## Features

- Browse apartment cards on the home page
- Open a detailed view for each apartment
- Add and edit apartment listings
- Delete listings from the collection
- View an about page with project information
- Responsive layout with styled cards and detail pages

## Tech Stack

- React
- React Router
- Vite
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - main app routes and state
- `src/pages/ItemCard.jsx` - listing page wrapper
- `src/components/ItemCardSummary.jsx` - apartment summary card
- `src/pages/ItemDetailsPage.jsx` - apartment details page
- `src/pages/UpdateApartmentPage.jsx` - apartment edit page
- `src/pages/AboutPage.jsx` - about page
- `src/index.css` - global styling

## Notes

The app uses local state and the sample apartment data in `src/assets/list.json`. Changes you make in the UI are stored in memory for the current session.
