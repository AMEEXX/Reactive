import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  
const Card = ({title}) => {
  const [hasLiked, sethasliked] = useState(false)
  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => sethasliked(!hasLiked)}>
        {hasLiked ? "Like" : "Liked"}
      </button>
      </div>
  )
}

  const App = () => {
    return (
      <div className='card-container'>
        {/* <h2>Functional Component</h2> */}
        <Card title = "3 Idiots"/>
        <Card title = "Lion King"/>
        <Card title = "Avatar"/>
       
      </div>
    )
  }


export default App
    