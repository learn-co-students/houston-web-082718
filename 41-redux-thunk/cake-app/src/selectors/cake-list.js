import { createSelector } from "reselect";

const cakeListSelector = state => state.cakeList;

export const sortedCakeListSelector = createSelector(
  cakeListSelector,
  cakeList => ({
    cakes: cakeList.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    })
  })
);
