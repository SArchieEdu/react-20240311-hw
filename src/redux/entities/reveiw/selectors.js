export const selectReviewModule = (state) => state.review;

export const selectReviewIds = (state) => selectReviewModule(state).ids;
export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id];
