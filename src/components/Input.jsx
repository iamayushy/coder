import { useState } from "react"

const Input = ({post,  handleText, value}) => {
    const handleGi = async() => {
        const data = await fetch('https://api.giphy.com/v1/gifs/search?api_key=UbzBIRRwdbn7FSE18vfpyePO3WW8eEn8&q=fun&limit=25&offset=0&rating=g&lang=en')
        const responese = data.json()
        responese.then(ans => console.log(ans))
    }
    return(
        <div className="comment-text">
            <input className="c-input" onChange={handleText} value={value} type="text" placeholder="post your comment"/>
            <button onClick={handleGi}>😀</button>
            
            <button onClick={post}>Post</button>
        </div>
    )
}
export {Input}