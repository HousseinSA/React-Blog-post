import React from "react";
import {Link} from "react-router-dom";
export default function BlogList({blog, title}) {
  return (
    <>
      <h1>Home Page</h1>
      <h2 className="allblogs">{title}</h2>
      {blog.map((blog) => {
        return (
          <div className="blog-container" key={blog.id}>
            <Link to={"blogs/" + blog.id}>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>
                  Writing by: <span className="author">{blog.author}</span>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
