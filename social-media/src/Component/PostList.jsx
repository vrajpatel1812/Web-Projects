import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListItems } from "../Store/PostList-Content-Store";
import NoPost from "./NoPost";
import Loading from "./Loading";

const PostList = () => {
  const { postList, fetchData } = useContext(PostListItems);

  return (
    <div className="PostListContainer">
      {fetchData && <Loading />}
      {!fetchData && postList.length === 0 && <NoPost></NoPost>}
      {!fetchData &&
        postList.map((posts) => <Post key={posts.id} postItems={posts} />)}
    </div>
  );
};

export default PostList;
