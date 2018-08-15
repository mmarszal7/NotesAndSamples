import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/placeholder'

const Placeholder = ({ articles, dispatch }) => (
    <div>
        <h1 className="mb-3">Placeholder</h1>
        {
            articles.splice(0, 10).map(article =>
                <div className="mb-3" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            )
        }
        <button className="btn btn-primary" onClick={() => dispatch(fetchArticles())}>Fetch articles</button>
    </div>
)

const mapStateToProps = state => ({
    articles: state.placeholder.articles,
});

export default connect(mapStateToProps)(Placeholder);
