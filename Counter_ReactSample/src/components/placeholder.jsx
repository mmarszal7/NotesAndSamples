import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/placeholder'

const Placeholder = ({ articles, dispatch }) => (
    <div>
        Placeholder
        {
            articles.map(article =>
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            )
        }
        <button className="btn btn-primary ml-2" onClick={() => dispatch(fetchArticles())}>Fetch articles</button>
    </div>
)

const mapStateToProps = state => ({
    articles: state.placeholder.articles,
});

export default connect(mapStateToProps)(Placeholder);
