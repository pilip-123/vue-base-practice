# TODO

## Progress

- [x] Replace `README.md` with the full “Vue Router Practice: Build a "CineCatalog" Movie App” exercise requirements.
- [x] Install `vue-router@4`.
- [x] Implement CineCatalog app in `src/` (router, views, data, nested routes, query filtering, 404, guard, lazy loading, nav).

## What’s implemented (checklist)

- [x] `src/data/movies.js`
- [x] `src/auth.js` (auth simulation)
- [x] `src/router/index.js` (routes + global beforeEach guard + nested overview/cast)
- [x] `src/views/HomeView.vue`
- [x] `src/views/MoviesView.vue` (genre filter via query `?genre=`)
- [x] `src/views/MovieDetailView.vue` (back button + tabs + child `<router-view>`)
- [x] `src/components/MovieOverview.vue`
- [x] `src/components/MovieCast.vue`
- [x] `src/views/WatchlistView.vue` (protected)
- [x] `src/views/NotFoundView.vue` (catch-all)
- [x] `src/App.vue` (nav + `<router-view />` + login/logout toggle)
- [x] `src/main.js` (register router)

## Lazy-loading

- [x] Route components are lazy-loaded in `src/router/index.js` via dynamic imports.

## Testing to run

- Run: `npm run dev`
- Verify:
  - `/` and `/movies` navigate without full reload
  - Clicking a movie goes to `/movies/:id`
  - `/movies/:id/overview` and `/movies/:id/cast` work
  - Genre filter updates URL query and survives reload
  - Unknown URL shows 404
  - `/watchlist` redirects home when logged out; works when logged in
  - DevTools Network: chunks for at least two routes load on first visit
