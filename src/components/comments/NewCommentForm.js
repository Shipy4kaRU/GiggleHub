import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../utlis/firebase-api";
import styles from "./NewCommentForm.module.css";
import Loader from "../UI/Loader";
import { useParams } from "react-router-dom";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const params = useParams();

  const { sendHttpRequest, status, error } = useHttp(addComment);

  const { onCommentAdded } = props;

  useEffect(() => {
    if (status === "completed" && !error) onCommentAdded();
  }, [status, error, onCommentAdded]);

  console.log(params.jokeId);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    if (enteredText.trim() !== "")
      sendHttpRequest({
        commentData: { text: enteredText },
        jokeId: params.jokeId,
      });
    commentTextRef.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <Loader />
        </div>
      )}
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
