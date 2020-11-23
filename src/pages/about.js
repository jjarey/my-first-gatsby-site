import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Product from "../components/product"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
      <Product />
    </div>
  )
}