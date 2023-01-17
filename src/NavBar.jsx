import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="navbar">
      <h1> Developers Blog </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-blog">New Blog</Link>
      </nav>
    </div>
  )
}
