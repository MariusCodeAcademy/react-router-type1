import { useState, useEffect } from 'react';
function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    console.log('PostsPage useEffect');
    getPosts();
  }, []);

  async function getPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    console.log(data.slice(0, 15));
    setPostsArr(data.slice(0, 15));
  }

  return (
    <div className='posts'>
      <h2>Posts</h2>
      <ul className='list-group'>
        {postsArr.length === 0 && <p>Loading.... </p>}
        {postsArr.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
