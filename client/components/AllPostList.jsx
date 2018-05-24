import React from 'react'
import {Col} from 'react-bootstrap'

const AllPostList = (props) => (
  <div>
    <Col xs={12} md={8}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </Col>
  </div>
)

export default AllPostList
