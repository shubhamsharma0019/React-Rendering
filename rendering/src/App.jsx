
import {useState} from "react"
function App() {
 
  return (
    <div>
         <HeaderWithButton/>
        <Header title="shubham"></Header>
    </div>
  )
}
function HeaderWithButton(){
  const [firsttitle,setFirstTitle] = useState('my name is shubham')

  function changeTitle(){
    setFirstTitle("my name is" + Math.random());
  }

  return <>
  <button onClick={changeTitle}>Click me to change the title</button>
  <Header title={firsttitle}/>
  </>
}


function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
