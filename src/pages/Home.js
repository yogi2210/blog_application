import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase_config'

export const Home = () => {
  const [postList, setPostList] = useState([])
  const postCollectionRef = collection(db, "posts")

  useEffect(()=>{
    const getPosts = async () =>{
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    getPosts()
  })
  return (
    <div className='home-page'>
      {postList.map((post)=>{
        return(
          <>
          <div className="post">
             <div className="postHeader">
                <div className="title">
                  <h1> {post.title}</h1>
                </div>
                <div className="delete-btn">
                  <button>&#128465;</button>
                </div>
             </div>
         
          <div className="post-text-container">{post.postText}</div>
         <h3> {post.author.name}</h3>
        </div>
          </>
        )
      })}
    </div>
  )
}
