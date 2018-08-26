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
          <div className="column is-7">
            {/* <!-- START ARTICLE --> */}
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
            {/* <!-- END ARTICLE --> */}
          </div>
          <div className="column is-5">
            <div className="card article">
              <div className="card-content">
                Test words
              </div>
            </div>
          </div>
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
