import useFetch from "./Custom Hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
export default function BlogDetails() {
  const { id } = useParams()
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/Blogs/${id}`)
  const navigate = useNavigate()
  function handelDelete() {
    fetch("http://localhost:8000/Blogs/" + id, {
      method: "DELETE",
    }).then(navigate("/"))
  }
  return (
    <div className="blog-details">
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="loading">{error}</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>
            Writing by: <span className="author">{blog.author}</span>
          </p>
          <p>{blog.content}</p>
          <button className="btn" onClick={handelDelete}>Delete Blog</button>
        </div>
      )}
    </div>
  )
}
