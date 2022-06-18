import { useState } from "react"
import { Input } from "./Input"

const Card = () => {
    const [open, setOpen] = useState(false)
    const [post, setPost] = useState('')
    const [allPost, setAllPost] = useState([])
    const handleChange = () => {
        setOpen(!open)
    }
    const handleText = (e) => {
        setPost(e.target.value)
    }
    const handlePost = () => {
        setAllPost([...allPost, post])
    }
    
    return(
        <div className="card" >
            <div className="image">
                <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <section className="comments" >
                <button onClick={handleChange} className="btn btn-1">Reply</button>
            </section>
            
            {open && <Input
            handleText={handleText}
            value={post}
            post={handlePost}/>}

            {open && allPost.map((ele, i) => {
                return (
                    <div className="comment" key={i}>
                        <p>{ele}</p>
                        <button className="reply">Reply</button>
                    </div>
                )
            })}
            
        </div>
    )
}
export {Card}
/*
input will open only ater some of the

*/