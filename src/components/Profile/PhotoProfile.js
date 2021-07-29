import React from 'react'
import photo from "./photo.JPG"

function PhotoProfile() {
    return (
        <div>
            <img src={photo} alt="photo" width="500px" height="500px" />
        </div>
    )
}

export default PhotoProfile
