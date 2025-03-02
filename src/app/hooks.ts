import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
