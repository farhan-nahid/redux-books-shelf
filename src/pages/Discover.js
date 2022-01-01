import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { loadBookAsync } from '../redux/features/bookSlice';

const Discover = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookAsync());
  }, [dispatch]);

  const books = useSelector((state) => state.books);

  return (
    <PageLayout>
      {
        // map book data
        books.discoverList.map((book) => (
          <Book key={book.id} book={book} remove='disable' add='no' done='disable' />
        ))
      }
      {books.status === 'Pending' && <h3 className='loading'>Loading.....</h3>}
      {books.status === 'Rejected' && <h3 className='error'>{books.error}</h3>}
    </PageLayout>
  );
};

export default Discover;
