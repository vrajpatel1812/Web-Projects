import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/PostList-Content-Store";
import { useContext } from "react";

const Post = ({ postItems }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card w-50 postContainer">
      <div className="card-body">
        <h5 className="card-title">{postItems.title}</h5>
        <p className="card-text">{postItems.body}</p>
        {postItems.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtagButton">
            {tag}
          </span>
        ))}
      </div>
      <span onClick={() => deletePost(postItems.id)} className="deletebutton">
        <MdDelete />
      </span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {postItems.reactions}
        <span className="visually-hidden">Reactions</span>
      </span>
    </div>
  );
};

Post.propTypes = {
  postItems: PropTypes.object,
};

export default Post;
