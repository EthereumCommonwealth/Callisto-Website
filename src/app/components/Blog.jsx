import React, { PureComponent } from 'react';
import { Element } from 'react-scroll';
import endpoints from '../constants/endpoints';
import BlogPost from './commons/BlogPost';

class Blog extends PureComponent {

  state = {
    blogPosts: [],
  }

  componentDidMount() {
    endpoints.getBlogPosts()
      .then((res) => this.setState({ blogPosts: res }))
      .catch(err => console.log('Error on market status get.', err))
  }

  render() {
    return (
      <Element name='blog' className='Blog'>
        <div className='Blog-content container'>
          <h3 className='Blog-title'>
            Blog and Press
          </h3>
          <div className='Blog-list'>
            {this.state.blogPosts.map(post => (
              <BlogPost
                key={`BlogPost-${post.id}`}
                title={post.title.rendered}
              />
            ))}
          </div>
        </div>
      </Element>
    )
  }
}

export default Blog;
