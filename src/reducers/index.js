import { combineReducers } from "redux";
import CategoriesReducers from "./categories";
import SubCategoriesReducers from "./subcategories";

const allReducers = combineReducers({
	categories: CategoriesReducers,
	subcategories: SubCategoriesReducers,
});

export default allReducers;
