import React from "react"
import "./BlogSidebar.scss"
import { Link } from "gatsby"

function BlogSidebar() {
  return (
    <div className="blog-sidebar">
      <p>
        Здесь обо всем, что мне интересно и в чем мне бы хотелось разобраться.
      </p>
      <p>Рубрики: </p>
      <p className="blog-sidebar__tags">
        <Link to="/books">[books]</Link>
        <Link to="/soft-skills">[soft skills]</Link>
        <Link to="/react">[react]</Link>
        <Link to="/javascript">[javascript]</Link>
        <Link to="/translate">[translate]</Link>
      </p>
    </div>
  )
}

export default BlogSidebar
