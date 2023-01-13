import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>Neji The Great Blog </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-blog">New Blog</Link>
      </nav>
    </div>
  )
}
