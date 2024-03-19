import { useContext, useRef } from "react";
import { PostList } from "../Store/PostList-Content-Store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { createPost } = useContext(PostList);
  const navigate = useNavigate();

  let postuserId = useRef();
  let posttitle = useRef();
  let postbody = useRef();
  let postreactions = useRef();
  let posttags = useRef();

  const handleSumbit = async (event) => {
    event.preventDefault();

    const data = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: postuserId.current.value,
        title: posttitle.current.value,
        body: postbody.current.value,
        reactions: postreactions.current.value,
        tags: posttags.current.value.split(" "),
      }),
    });
    const res = await data.json();
    createPost(res);

    postuserId.current.value = "";
    posttitle.current.value = "";
    postbody.current.value = "";
    postreactions.current.value = "";
    posttags.current.value = "";
    navigate("/");
  };

  return (
    <form className="postCreateContainer" onSubmit={handleSumbit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          UserID
        </label>
        <input
          type="text"
          className="form-control"
          id="userID"
          ref={postuserId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={posttitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          ref={postbody}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          ref={postreactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input type="text" className="form-control" id="tags" ref={posttags} />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
