import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

export default function RandomPhoto({ onChangeImgUrl, value = null }) {

    const [urlImg, setUrlImg] = useState('');

    const handleImgChange = () => {
        const id = Math.floor(Math.random() * 600);
        const url = `https://picsum.photos/id/${id}/300/300`;
        setUrlImg(url);
        onChangeImgUrl(url);
    }

    useEffect(() => {
        if (value) {
            setUrlImg(value);
        } else {
            handleImgChange();
        }
    }, []);

    return (
        <div>
            <Button type="button" onClick={handleImgChange}>Random a photo</Button>
            <div><img src={urlImg} width="300px" alt="img" /></div>
        </div>
    )
}
