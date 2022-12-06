import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/User";

function CommentAdder({ setComments, article_id }) {
  const userValue = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: userValue.user.username,
    body: "",
  });
  const [postingComment, setPostingComment] = useState(false);
  const [commentStatus, setCommentStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.body.length) {
      alert("Please add text before commenting");
    } else if (!userValue.user.username) {
      alert("Please login to comment");
    } else {
      setPostingComment(true);
      postComment(newComment, article_id).then((commentFromApi) => {
        setNewComment({ ...newComment, body: "" });
        setComments((currComments) => {
          const newComments = [...currComments];
          newComments.unshift(commentFromApi);
          return newComments;
        });
        setPostingComment(false);
        setCommentStatus('Your comment has been posted!')
      });
    }
  };

  return postingComment ? (
    <p>...posting comment</p>
  ) : (
    <div className="CommentAdder">
      <form className="CommentAdder_form" onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add a comment</label>
        <br />
        <textarea
          id="CommentAdder_newComment"
          value={newComment.body}
          onChange={(e) =>
            setNewComment({ ...newComment, body: e.target.value })
          }
        ></textarea>
        <br />
        <button>Add</button>
      </form>
      <p>{commentStatus}</p>
    </div>
  );
}

export default CommentAdder;