import React from 'react'
import './Searchbar.css'

export default function Searchbar(props) {
  return (
    <form>
      <input type="text" placeholder='Search for a city' />
      <button>Submit</button>
    </form>
  )
}
