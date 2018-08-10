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
                    <p className="title article-title">Introducing a new feature for paid subscribers</p>
                    <div className="tags has-addons level-item">
                      <span className="tag is-rounded is-info">@skeetskeet</span>
                      <span className="tag is-rounded">May 10, 2018</span>
                    </div>
                  </div>
                </div>
                <div className="content article-body">
                  <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                  <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam.
                              Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                  <h3 className="has-text-centered">How to properly center tags in bulma?</h3>
                  <p> Proper centering of tags in bulma is done with class: <pre>level-item</pre>
                              Voluptat ut farmacium tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie.
                              Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.</p>
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
