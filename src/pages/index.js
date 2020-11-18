import React from "react"
// The Gatsby <Link /> component is for internal linking between pages within the site.
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <Header headerText="Hello There!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}