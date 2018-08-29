import React from 'react'

function timeStamp (t) {
  const date = new Date(t)
  return date.toDateString()
}

const ArticleList = ({id, title, date, body, author}) => (
  <div className="card article">
    <div className="card-content">
      <div className="media">
        <div className="media-content has-text-centered">
          {/* Article title */}
          <p className="title article-title">{title}</p>
          {/* *** */}
          <div className="tags has-addons level-item">
            {/* handle bullet and date bullet */}
            <span className="tag is-rounded is-info">{author}</span>
            <span className="tag is-rounded">{timeStamp(date)}</span>
            {/* *** */}
          </div>
        </div>
      </div>
      <div className="content article-body">
        <p>{body}</p>
      </div>
      <a className="button is-info">Read More</a>
    </div>
  </div>
)

export default ArticleList
