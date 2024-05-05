import { useState } from "react"

export default function State1() {
    const [posts , setPosts] = useState () //data = posts
    const [postsId , setPostsId] = useState (1) //data = posts
    const updateUp = () => setPostsId(postsId + 1)
    const updateDown = () => setPostsId(postsId - 1)
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))

  return (
      <>
       {/* ? = اذا كانت ال postsفيها معلومات اعرضها  */}
       <div>
        {posts?.map(post => 
          <>
            {post.id === postsId 
            ?(<>
            <h2>{post.id}:{post.title}</h2>
            <p>{post.body}</p>
            </>)
            :("")
            }
          </>
        )}
        <button onClick={updateUp}>+</button>
        <button onClick={updateDown}>-</button>
       </div> 

    </>
  )
}


