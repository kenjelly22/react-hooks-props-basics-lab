import React from "react"

function Links(props) {
  console.log(props)
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={props.links}></a>
      <a href={props.links}></a>
    </div>
  )
}

export default Links
