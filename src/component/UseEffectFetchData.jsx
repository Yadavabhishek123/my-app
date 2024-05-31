import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UseEffectFetchData() {
    const [post, setpost] = useState({})
    const [id, setid] = useState(1)

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
          setpost(res.data)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }, [id])

  return (
    <div >
        <input type='text' value={id} onChange={e => setid(e.target.value)}></input>
        <h1>{post.title}</h1>
        {/* <ul>
          {post.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
    </div>
  )
}

export default UseEffectFetchData


// Fetch a single Post by passing in the id entered by user


// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function UseEffectFetchData() {
//     const [post, setpost] = useState({})
//     const [id, setid] = useState(1)

//     useEffect(() => {
//       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(res => {
//           setpost(res.data)
//           console.log(res)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }, [id])

//   return (
//     <div >
//         <input type='text' value={id} onChange={e => setid(e.target.value)}></input>
//         <h1>{post.title}</h1>
//         {/* <ul>
//           {post.map(post => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul> */}
//     </div>
//   )
// }

// export default UseEffectFetchData


// Part 1 for fetch data with thge help of useEffect Hook


// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function UseEffectFetchData() {
//     const [post, setpost] = useState([])

//     useEffect(() => {
//       axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => {
//           setpost(res.data)
//           console.log(res)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }, [])

//   return (
//     <div >
//         <ul>
//           {post.map(post => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//     </div>
//   )
// }

// export default UseEffectFetchData