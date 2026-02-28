import React from "react";

import Picture from './img/main_photo.jpg'

export default function Photo() {
    return (
        <div className="header-photo">
         <img  src={Picture}  alt='Jonathas Souza' />
      </div>
    )
}