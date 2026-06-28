export const Post = ({posts,isVisible})=>{
    return(
        <>
          <section className="posts-section" id="posts">
        <div
          id="posts-header"
          data-animate
          className={`fade-up${isVisible("posts-header") ? " in-view" : ""}`}
        >
          <p className="section-label">From the community</p>
          <h2 className="section-title">Words that feel like yours</h2>
        </div>
        <div className="posts-grid" id="posts-grid" data-animate>
          {posts.map((post) => (
            <article
              key={post.id}
              id={post.id}
              data-animate
              className={`post-card${isVisible(post.id) ? " in-view" : ""}`}
              style={{ "--accent-color": post.color }}
            >
              <span className="post-tag">{post.tag}</span>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href="#" className="post-read-more">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
        </>
    )
}