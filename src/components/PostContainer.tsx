import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer: React.FC = (props) => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10);

  return (
    <div className="posts">
      {isLoading && <h1>Loading....</h1>}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}

      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
