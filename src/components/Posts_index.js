import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div>
                    <Link to='/new'>Add a Post</Link>
                </div>
                
                List of blog posts
            
            </div>
        );
    }
}



export default connect(null, { fetchPosts })(PostsIndex);