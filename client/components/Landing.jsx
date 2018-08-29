import React from 'react'

import {connect} from 'react-redux'
import {handleAllPosts} from '../actions/posts'
import ArticleList from './ArticleList'

class Landing extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  componentDidMount () {
    this.props.dispatch(handleAllPosts())
  }

  render () {
    const posts = this.props.posts || []
    return (
      <div className="container">
        {/* <!-- START ARTICLE FEED --> */}
        <section className="articles padding-top padding-bottom columns">
          {/* <!-- START ARTICLE --> */}
          <div className="column is-7">
            <div className='list'>
              {posts.map(posts =>
                <ArticleList
                  key={posts.id}
                  id={posts.id}
                  title={posts.title}
                  date={posts.date_posted}
                  body={posts.body}
                  author={posts.author}
                />
              )
              }
            </div>
          </div>
          {/* <!-- END ARTICLE --> */}
          {/* <!-- START SIDE BAR --> */}
          <div className="column is-5">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Search</strong>
                      <input className="input" type="text" placeholder="Search for..."/>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {/* <!-- END SIDE BAR --> */}
        </section>
        {/* END ARTICLE FEED */}
      </div>

    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.allPosts
  }
}

export default connect(mapStateToProps)(Landing)
