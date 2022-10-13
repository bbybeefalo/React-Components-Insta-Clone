/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import React, {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('');

  const likePost = postId => {
    setPosts([...posts].map(post => {
      let postsCopy = post;
      if (post.id === postId) {
        postsCopy.likes += 1;
        return postsCopy;
      } else {
        return post;
      }
    }))
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
  };

  return (
    <div className='App'>
      <SearchBar searchTerm={searchTerm} />
      <Posts likePost={likePost} posts={posts}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
