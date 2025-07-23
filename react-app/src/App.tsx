import Message from "./message"
function App(){
  //v1
  return <div><Message></Message></div>
  //v2
  //return <div> <Message /></div>// self closing tag
}

// To use it first you need to export it so that 
  // it can be used somewhere else
export default App;