import { useState } from 'react';
import styles from "./Comment.module.css";

export default function Comment() {

    const [content, setContent] = useState('');

    function handlePost() {
      alert("Comment sent!")
    }

    return (
      <div>
        <div className={styles.div}>Comment on this article</div>
        <form className={styles.form}>
         <input
            className={styles.input}
            id="comment"
            name="comment"
            type="text"
            placeholder='Add your comment here...'
            required
          />
          <button
            type="submit"
            className={styles.button}
            onClick={handlePost}
          >
            post
          </button>
        </form>
        <hr></hr>
      </div>
    );
} 
