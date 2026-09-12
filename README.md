<<<<<<< HEAD
# Favourite Student List

A React app demonstrating routing (React Router), global state with `useContext`,
and conditional rendering — students are grouped folder-wise by section, and
you can add or remove them from a favourites list that's shared across pages.

## Features

- Two routes: `/` (Student roster) and `/favourites` (Favourites), navigated
  with real `react-router-dom` `<Link>`s — no page reloads.
- `StudentContext` (`src/context/StudentContext.jsx`) holds the favourites
  array globally via `useContext`, with `addFavourite`, `removeFavourite`,
  and `isFavourite` helpers.
- Duplicate students can't be added twice.
- Students are grouped into expandable "folders" by section (A / B / C).
- Empty state: "No favourite students added yet" when the list is empty.
- Styled with Tailwind CSS, Google Fonts (Fraunces + Inter), and
  `lucide-react` icons.

## Project structure

```
src/
  main.jsx                 entry point, wraps App in BrowserRouter
  App.jsx                  layout, header, nav, route definitions
  index.css                Tailwind directives
  context/
    StudentContext.jsx     global favourites state (Context + useContext)
  data/
    students.js            roster data, grouped by section
  components/
    Nav.jsx                top navigation (real <Link> components)
    Avatar.jsx              initials avatar
    StudentCard.jsx         roster card with "Add to favourite"
    StudentFolder.jsx       expandable folder-tab wrapper
    FavouriteRow.jsx        favourites list row with "Remove"
    EmptyFavourites.jsx     empty-state message
    PageHeading.jsx         page title + subtitle
  pages/
    RosterPage.jsx          groups ROSTER into folders by section
    FavouritesPage.jsx      groups favourites into folders by section
```

## Getting started

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Customizing

- Edit the roster in `src/data/students.js` — add, remove, or rename
  students, sections, or `FOLDER_COLORS`.
- Colors and fonts are defined inline as design tokens at the top of each
  component file; change them there to re-theme the app.
=======
# studentfavouritelist
>>>>>>> fb2301ae133dc6a123074c2465a7f7fc9a0961b4
