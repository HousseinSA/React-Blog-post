import React from "react"
import Home from "./Home"
import NavBar from "./NavBar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateBlog from "./CreateBlog"
import BlogDetails from "./BlogDetails"
import NotFoundPage from "./NotFoundPage"
export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/new-blog" exact element={<CreateBlog />} />
        <Route path="/blogs/:id" exact element={<BlogDetails />} />
        <Route path="/*" exact element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}
