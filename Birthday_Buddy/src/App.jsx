import { useGlobalContext } from "./context"


function App() {
  const { name } = useGlobalContext()
  console.log(name)



  return (
    <div className='container'>

    </div>
  )
}

export default App
