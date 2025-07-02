import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post.jsx'

//The tag <Fragment> is a special component from React that lets you group multiple elements without adding extra DOM nodes.

// Example using <div> tag:

// Code:
// {posts.map((post) => (
//   <div key={post._id}>
//     <Post {...post} />
//     <hr />
//   </div>
// ))}
// DOM:

// <div>
//   <div> <!-- ← Extra wrapper -->
//     <article>...</article>
//     <hr>
//   </div>
//   <div>
//     <article>...</article>
//     <hr>
//   </div>
// </div>

// Example using Fragment tag:
// Code:
// {posts.map((post) => (
//   <Fragment key={post._id}>
//     <Post {...post} />
//     <hr />
//   </Fragment>
// ))}

// DOM:
// <div>
//   <article>...</article>
//   <hr>
//   <article>...</article>
//   <hr>
// </div>

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired, // This line of code say this: “posts is a required array of objects, and each object should look like the props that the Post component expects.”
}
