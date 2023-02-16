import { ADD__COMPANIES, } from "./companiesActions";


export const companiesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD__COMPANIES: {
            return action.companies
        }
        default: {
            return state
        }
    }
}