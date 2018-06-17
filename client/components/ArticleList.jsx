import React from 'react'

class ArticleList extends React.Component {
  render () {
    return (
      <section className="articles">
        <div className="column is-8 is-offset-2">
          {/* <!-- START ARTICLE --> */}
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">Placeholder title</p>
                  <div className="tags has-addons level-item">
                    <span className="tag is-rounded is-info">@riverkat</span>
                    <span className="tag is-rounded">June 18, 2018</span>
                  </div>
                </div>
              </div>
              <div className="content article-body">
                <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam.
                              Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
              </div>
            </div>
          </div>
          {/* <!-- END ARTICLE --> */}
        </div>
      </section>
    )
  }
}

export default ArticleList
