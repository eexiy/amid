import { ADD__BLOGS } from "./blogsActions"
import blogs from '../../mock/blogs.json'
const initialState = {
    blogs,
    loading:false,
    error: ""
}

export const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__BLOGS: {
            return {
                ...state,
                loading: true
            }
        }
        default: {
            return state
        }
    }
}