import React from "react";
import memesData from "../memesData.js";

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
    }
    return (
        <main>
            <div className="form">
                <p>{url}</p>
                <input type="text" className="form--input" placeholder="Top Text"></input>
                <input type="text" className="form--input" placeholder="Bottom Text"></input>
                <button className="form--button" onClick={getMemeImage}></button>
            </div>
        </main>
    )
}