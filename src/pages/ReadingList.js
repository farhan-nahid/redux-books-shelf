import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
  const books = useSelector((state) => {
    return state.books.readingList;
  });

  return (
    <PageLayout>
      {books.length ? (
        // ,map book data

        books.map((book) => <Book key={book.id} book={book} remove='no' add='disable' done='no' />)
      ) : (
        <p>
          Looks like you've finished all your books! Check them out in your <Link to='finish'>finished books</Link> or <Link to='/'>discover more</Link>.
        </p>
      )}
    </PageLayout>
  );
};

export default ReadingList;
