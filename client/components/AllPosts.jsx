import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import AllPostList from './AllPostList'

class AllPosts extends React.Component {
  render () {
    const allBlogPosts = this.props.allBlogPosts
    return (
      <Grid>
        <Row className="show-grid">
          {allBlogPosts.map(post =>
            <AllPostList
              key={post.id}
              {...post}
            />
          )}
          <Col xs={6} md={4}>
            <p>These words test the right aligned column</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
const mapStateToProps = state => {
  return {
    allBlogPosts: state.allPosts
  }
}
export default connect(mapStateToProps)(AllPosts)
