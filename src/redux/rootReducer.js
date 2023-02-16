import { combineReducers } from "redux";
import { companiesReducer } from "./companies/companiesReducer";
import { blogsReducer } from "./blogs/blogsReducer";
export const rootReducer = combineReducers({
    companies: companiesReducer,
    blogs: blogsReducer
})