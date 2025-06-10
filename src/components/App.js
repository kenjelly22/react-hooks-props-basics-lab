import React from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
// import Links from "./Links"

// pass this data down as props to the child component(s) that need it!
import user from "../data/user"

function App() {
  console.log(user)
  return (
    <div>
      <NavBar />
      <Home color={"firebrick"} name={user.name} city={user.city} />
      <About
        isBio={true}
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  )
}

export default App
