import { createContext, useReducer, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
  fetchData: false,
});

const postListReducer = (currentList, action) => {
  let updatedList = currentList;

  if (action.type === "CREATE_POST") {
    updatedList = [action.prototypes, ...currentList];
  } else if (action.type === "DELETE_POST") {
    updatedList = currentList.filter(
      (list) => list.id !== action.prototypes.UserID
    );
  } else if (action.type === "CREATEING_INTIAL_POSTS") {
    updatedList = [...action.prototypes.data];
  }

  return updatedList;
};

const PostProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetchData, setfetchData] = useState(true);

  const createPost = (res) => {
    dispatchPostList({
      type: "CREATE_POST",
      prototypes: res,
    });
  };

  const deletePost = (UserID) => {
    dispatchPostList({
      type: "DELETE_POST",
      prototypes: {
        UserID,
      },
    });
  };

  const createInitialPosts = (data) => {
    dispatchPostList({
      type: "CREATEING_INTIAL_POSTS",
      prototypes: {
        data,
      },
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        createInitialPosts(data.posts);
        setfetchData(false);
      });

    return () => {
      // console.log("Cleaning up useEffect");
      controller.abort;
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, createPost, deletePost, fetchData }}>
      {children}
    </PostList.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.object,
};

export default PostProvider;
