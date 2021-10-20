import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer: React.FC = (props) => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = window.prompt("Enter name: ", "");

    await createPost({
      title,
      body: title,
    } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div className="posts">
      <button type="button" onClick={handleCreate}>
        Add new post
      </button>

      {isLoading && <h1>Loading....</h1>}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}

      {posts?.map((post) => (
        <PostItem
          remove={handleRemove}
          update={handleUpdate}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostContainer;
