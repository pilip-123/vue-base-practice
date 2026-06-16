# TODO

## Plan

- [x] Fix duplicate student `id`s in `src/App.vue`.
- [x] Add total student counter + search state and computed filtered list in `src/App.vue`.
- [x] Update `src/components/StudentList.vue` to include a search input and render filtered students.
- [x] Update `src/components/StudentCard.vue` to use Tailwind for a nicer card UI, add star/favorite toggle button.
- [x] Update `src/components/BaseCard.vue` if needed (or remove old CSS) to support Tailwind styling.
- [x] Wire favorite toggle events from `StudentCard` -> `StudentList` -> `App.vue` and update favorites state.
- [x] Ensure delete updates favorites and detail view correctly.
- [x] Run `npm run dev` and manually verify search, star toggle, counter, and delete.
