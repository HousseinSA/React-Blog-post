import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='notFound'>
        <h2>Sorry</h2>
        <p>the page you looking is missing</p>
        <button> <Link to={"/"}>Back to Home</Link></button>
       
    </div>
  )
}
