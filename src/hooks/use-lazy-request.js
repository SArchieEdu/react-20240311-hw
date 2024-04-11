import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selector";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useLazyRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();

  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(() => {
    setRequest(dispatch(thunk(...params)));
  }, [dispatch, thunk, ...params]);

  return [status, makeRequest];
};
