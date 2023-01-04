import React from 'react'
import "./Header.scss"
import { images } from '../constants';


const Header = () => {
  return (
    <div>Header
        <img src={images.profile} alt="" />
    </div>
  )
}

export default Header