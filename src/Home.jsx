import React from "react"
import BlogList from "./BlogList"
import useFetch from "./Custom Hooks/useFetch"
export default function Home() {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/Blogs"
  )
  return (
    <>
      {loading && <div className="loading">Loading... </div>}
      {error && <div className="error">{error}</div>}
      <div className="home">
        {data && (
          <BlogList
            blog={data}
            title="All blogs"
          
          />
        )}
      </div>
    </>
  )
}
