
import React,{Suspense,lazy} from "react"
//import MyComp from "./MyComp"
const MyComp=lazy(()=>import("./MyComp"))
const About=lazy(()=>import("./About"))

class App extends React.Component {
  render(){
    return(
      <div>
      <h3>Lazy Loading</h3>
      <Suspense fallback={<div>Loading...</div>}>
      <MyComp/>
      </Suspense>
      <Suspense fallback={<div>Loading...from About Section</div>}>
        <About/>
      </Suspense>
      </div>
    )
  }
}

export default App