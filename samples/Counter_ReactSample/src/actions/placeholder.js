export const ActionTypes = {
    FETCH_ARTICLES: 'FETCH_ARTICLES',
}

export const fetchArticles = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(articles =>
            dispatch({
                type: ActionTypes.FETCH_ARTICLES,
                articles
            })
        );
}
