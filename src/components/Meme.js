import React from 'react'
import memeImage from "../img/meme.png"
import { TextField, Button } from '@mui/material';

const Meme = () => {
    return (
        <div className='main-container'>
            <div className='meme-form'>
                <TextField id="outlined-basic"
                    label="Top text"
                    variant="outlined"
                    size="small"
                />
                <TextField id="outlined-basic"
                    label="Bottom text"
                    variant="outlined"
                    size="small" />
                <Button className='meme-form-button' variant="outlined" color='secondary' >Primary</Button>
            </div>

            <div className='meme'>
                <img className='meme-image' src={memeImage} />
                <h2 className='meme-heading top'>test top text</h2>
                <h2 className='meme-heading bottom'>test bottom text</h2>
            </div>
        </div>
    )
}

export default Meme