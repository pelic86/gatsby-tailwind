import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi people</h1>
    </div>
    <p className={"text-2xl"}>Welcome to your new Gatsby site.</p>
    <button
      className={`bg-green-500 text-white text-sm h-8 rounded-lg px-3 focus:outline transition ease-in-out duration-150`}
    >
      Button
    </button>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
