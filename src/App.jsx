import UserCard from "./Components/UserCard"
import '../src/App.css'
import twitter from './Components/Assets/twitter.png'

const App = () => {


  return (
    <div className="app">
      <UserCard/>
      <div className="footer">
        <h3>Developed by <span>Holafix</span> <img src={twitter} alt="" /></h3>
      </div>
    </div>
  )
}

export default App
