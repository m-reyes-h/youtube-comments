import React from "react"
import '../styles/index.css';
import CommentForm from "../components/CommentForm"
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <header>
      <h1>Youtube comments</h1>
    </header>
    <main>
      <CommentForm />
    </main>
    <footer>footer</footer>
  </Layout>
)
