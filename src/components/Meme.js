import React from 'react'
import memeImage from "../img/meme.png"
import { TextField, Button } from '@mui/material';

const Meme = () => {

    const [inputData, setInputData] = React.useState({

        topText: "",
        bottomText: "",
        imageUrl: ""
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getNewImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url;
        setInputData(prevState => ({
            ...prevState,
            imageUrl: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setInputData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <div className='main-container'>
            <div className='meme-form'>
                <TextField id="outlined-basic"
                    label="Top text"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="topText"
                    value={inputData.topText}
                />
                <TextField id="outlined-basic"
                    label="Bottom text"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="bottomText"
                    value={inputData.bottomText}
                />
                <Button className='meme-form-button' variant="outlined" color='secondary' onClick={getNewImage}>Get a new image</Button>
            </div>

            <div className='meme'>
                <img className='meme-image' src={inputData.imageUrl} />
                <h2 className='meme-heading top'>{inputData.topText}</h2>
                <h2 className='meme-heading bottom'>{inputData.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme