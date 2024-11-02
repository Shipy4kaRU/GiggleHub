import { useState, useEffect, useCallback } from "react";

import styles from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getComments } from "../../utlis/firebase-api";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import CommentsList from "../comments/CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendHttpRequest,
    status,
    data: loadedComments,
  } = useHttp(getComments);

  const params = useParams();
  const { jokeId } = params;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [jokeId, sendHttpRequest]);

  const commentAddedHandler = useCallback(() => {
    sendHttpRequest(jokeId);
  }, [jokeId, sendHttpRequest]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <Loader />
      </div>
    );
  }

  if (status === "completed" && (loadedComments || loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments}></CommentsList>;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = (
      <p className="centered">This joke doesn't have any comments yet</p>
    );
  }

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onCommentAdded={commentAddedHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
