import React from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = React.memo((props) => {
  const { post, remove, update } = props;

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    event.stopPropagation();
    const title = window.prompt("Enter name: ", "") || "";

    update({ ...post, title });
  };

  return (
    <article className="post" onClick={handleUpdate}>
      <span className="post__id">{post.id}</span>
      <h2 className="post__name">{post.title}</h2>
      <p className="post__text">{post.body}</p>
      <button className="post__delete" type="button" onClick={handleRemove}>
        Delete
      </button>
    </article>
  );
});

export default PostItem;
