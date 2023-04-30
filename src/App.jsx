import './App.css'
import Searchbar from './Searchbar'
import WeatherCard from './WeatherCard'

function App() {
  return (
    <div className="container">
      <h1 className='heading'>Simple Weather App</h1>
      <Searchbar/>
      <WeatherCard/>
    </div>
  )
}

export default App
