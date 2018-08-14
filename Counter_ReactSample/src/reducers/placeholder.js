import { ActionTypes } from '../actions/placeholder'

const initialState = {
    articles: []
}

export const placeholderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ARTICLES:
            return {
                ...state,
                articles: action.articles
            }

        default:
            return state
    }
}