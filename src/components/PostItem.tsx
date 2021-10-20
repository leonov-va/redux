import React from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: React.FC<PostItemProps> = React.memo(({ post }) => {
  return (
    <article className="post">
      <span className="post__id">{post.id}</span>
      <h2 className="post__name">{post.title}</h2>
      <p className="post__text">{post.body}</p>
      <button className="post__delete" type="button">
        Delete
      </button>
    </article>
  );
});

export default PostItem;
