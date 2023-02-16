import React from "react";

export default function Meme() {
    return (
        <main className="form">
            <form className="form">
                <input type="text" className="form--input" placeholder="Top Text"></input>
                <input type="text" className="form--input" placeholder="Bottom Text"></input>
                <input type="submit" className="form--button" value="New image"></input>
            </form>
        </main>
    )
}