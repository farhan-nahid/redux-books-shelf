import React, { useEffect, useState } from 'react';
import { HiCheckCircle, HiMinusCircle, HiPlusCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { addToFinishedList, addToReadingList, removeFromReadingList } from '../../redux/features/bookSlice';
import styles from './book.module.css';

const SingleBook = ({ book, remove, add, done }) => {
  const [isMinusDisable, setIsMinusDisable] = useState(true);
  const [isAddDisable, setIsAddDisable] = useState(true);
  const [isDoneDisable, setIsDoneDisable] = useState(true);
  const { title, author, coverImageUrl, synopsis, id } = book;
  const dispatch = useDispatch();

  useEffect(() => {
    if (remove === 'no') {
      setIsMinusDisable(false);
    }
  }, [remove]);

  useEffect(() => {
    if (add === 'no') {
      setIsAddDisable(false);
    }
  }, [add]);

  useEffect(() => {
    if (done === 'no') {
      setIsDoneDisable(false);
    }
  }, [done]);

  const handelReadingList = () => {
    dispatch(addToReadingList(book));
    setIsAddDisable(true);
  };

  const handelFinishList = () => {
    dispatch(addToFinishedList(book));
    setIsAddDisable(true);
  };

  return (
    <div className='card d-flex mb-3 p-3' style={{ position: 'relative' }}>
      <div className='row'>
        <div className='col-md-3'>
          <img className='img-fluid' src={coverImageUrl} alt={title} />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis?.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        <button disabled={isMinusDisable}>
          <HiMinusCircle title='Remove from list' className={styles.minus_icon} onClick={() => dispatch(removeFromReadingList(id))} />
        </button>
        <button disabled={isAddDisable} onClick={handelReadingList}>
          <HiPlusCircle title='Add to Reading' className={styles.plus_icon} />
        </button>
        <button disabled={isDoneDisable} onClick={handelFinishList}>
          <HiCheckCircle title='Mark as Finish' className={styles.check_icon} />
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
