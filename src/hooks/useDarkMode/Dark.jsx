import React from 'react'
import './Dark.css'
import useDarkMode from './useDarkMode'

const Dark = () => {
    const { Dark} = useDarkMode()
  return (
    <div className="button-container">
      <button className="dark-mode-btn" onClick={Dark}>Темный режим</button>
      <button className="light-mode-btn">Светлый режим</button>
    </div>
  )
}

export default Dark