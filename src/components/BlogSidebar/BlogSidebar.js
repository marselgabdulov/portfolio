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
      <p>
        <Link to="/books">[Книги]</Link>
      </p>
    </div>
  )
}

export default BlogSidebar
