import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase_config'
import { useNavigate } from 'react-router-dom'

export const CreatePost = () => {
    const navigate = useNavigate()
    const [ title, setTitle ] = useState("")
    const [ postText, setPostText ] = useState("")

    const postCollectionRef = collection(db, "posts")

    const createPost = async () =>{
         await addDoc(postCollectionRef, {
             title: title,
             postText: postText,
             author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
             }
            })
            navigate('/')
    }

  return (
    <div className='create-post-page'>
        <div className="cp-container">
            <h1>Create A Post</h1>
            <div className="inputGp">
                <label> Title: </label>
                <input type="text" placeholder='Title...'
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
            </div>
            <div className="inputGp">
                <label > Post: </label>
                <textarea cols="30" rows="10" placeholder='Post...'
                    onChange={(e)=>{
                        setPostText(e.target.value)
                    }}
                ></textarea>
            </div>
            <button onClick={createPost} >Submit Post</button>
        </div>
    </div>
  )
}
