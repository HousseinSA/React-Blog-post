import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateBlog() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate()
  function handelSubmit(e) {
    setIsloading(true)
    e.preventDefault()
    const newBlog = { title, author, content }
    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(setIsloading(false), navigate("/"))
  }
  return (
    <div className="create-blog">
      <form onSubmit={handelSubmit}>
        <h1>New Blog</h1>
        <label>Blog Title:</label>
        <input
          value={title}
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Content</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {!isloading && <button type="sumbit">Add blog</button>}
        {isloading && <button disabled>addding blog...</button>}
      </form>
    </div>
  )
}
