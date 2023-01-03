import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
        type: FETCH_PAGE,
        payload: {
            [page]: response.data
        }
    });
}