import React from 'react'

class ArticleList extends React.Component {
  render () {
    return (
      <div className="container">
        {/* <!-- START ARTICLE FEED --> */}
        <section className="articles">
          <div className="column is-8 is-offset-2">
            {/* <!-- START ARTICLE --> */}
            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                  {/* Article title */}
                    <p className="title article-title">Article title</p>
                    {/* *** */}
                    <div className="tags has-addons level-item">
                    {/* handle bullet and date bullet */}
                      <span className="tag is-rounded is-info">@Twiiter handle</span>
                      <span className="tag is-rounded">Date bullet</span>
                    {/* *** */}
                    </div>
                  </div>
                </div>
                <div className="content article-body">
                  <p>Paragraph one</p>
                  <p>Paragraph two</p>
                </div>
              </div>
            </div>
            {/* <!-- END ARTICLE --> */}         
          </div>
        </section>
        {/* END ARTICLE FEED */}
      </div>
    )
  }
}

export default ArticleList
