import React, { Component } from 'react';
import './SearchResults.css';



export default class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        }
    }

    render() {
        return (
            <div className="SearchResults">
                {
                    this.state.results.map((result, i) => {
                        return <a key={result.id}>{result.by} - {result.title}</a>
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
            .then(response => response.json())
            .then(stories => {
                console.log(stories);
                return Promise.all(stories.map(story => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`)
                        .then(response => response.json());
                }))
            })
            .then(results => {
                console.log('results: ', results);
                return this.setState({ results: results });
            })
    }
}