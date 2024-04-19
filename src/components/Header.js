import React from 'react'
import HeaderImage from "../img/Nyan-Cat-PNG-Transparent-HD-Photo.png"

const Header = () => {
    return (
        <header>
            <img className='header-logo' src={HeaderImage} />
            <p className='header-description'>Meme Generator</p>
        </header>
    )
}

export default Header