import { REQUEST_STATUSES } from "./constants";

export const selectRequestModule = (state) => state.request;

export const selectRequestStatus = (state, requestId) =>
  selectRequestModule(state)[requestId]?.status || REQUEST_STATUSES.idle;
export const selectIsRequestPending = (state, requestId) =>
  selectRequestStatus(state, requestId) === REQUEST_STATUSES.pending;
export const selectIsRequestFulfilled = (state, requestId) =>
  selectRequestStatus(state, requestId) === REQUEST_STATUSES.fulfilled;
export const selectIsRequestRejected = (state, requestId) =>
  selectRequestStatus(state, requestId) === REQUEST_STATUSES.rejected;
export const selectRequestError = (state, requestId) =>
  selectRequestModule(state)[requestId]?.error;
