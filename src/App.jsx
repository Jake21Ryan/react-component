import './App.css'
import Greetings from './Greetings'
import User from './User'

function App() {
  return (
    <>
      <div className="card">
        <div>
          <Greetings />
          <User name="Aung Myint Myat" />
        </div>
      </div>
    </>
  )
}

export default App
