import React, { useState} from 'react';

import Button from '../Button'

import {createComment} from '../../services/apiServices'

import styles from './Comments.module.css'

interface comments {
  id: string | number,
  body: string,
  postId: string | number,
}

interface ComentsProps {
  comments: comments[]
  postId: string | number,
}

export default function Comments({ comments, postId }: ComentsProps): React.ReactElement {
  const [commentsArr, setCommentsArr] = useState(comments)
  const [newComment, setNewComment] = useState('')
  

  //   const heandleCreatePost = async postObj => {
  //   await createPost(postObj);
  //   Router.push('/');
  // };

  const heandleAddComments = async () => {
    const post = await createComment({postId, body: newComment})
    setCommentsArr([...commentsArr, post])
  }

  return (
      <>
        {commentsArr.length > 0 && (
            <>
              <p>Coments</p>
              <ul>
                {commentsArr.map(coment => (
                  <li key={coment.id}>{coment.body}</li>
                ))}
          </ul>
            </>
      )}
      <input
          className={styles.input}
          name="title"
          type="text"
          value={newComment}
          onChange={e => setNewComment(e.currentTarget.value)}
          required
          />
          <Button type="button" onClick={heandleAddComments}>Add comments</Button>
    </>
  );
}