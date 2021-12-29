import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
// import books from '../fakeData/books.json';

const Discover = () => {
  const books = useSelector((state) => {
    return state.books.discoverList;
  });

  return (
    <PageLayout>
      {
        // ,map book data
        books?.map((book) => (
          <Book key={book.id} book={book} />
        ))
      }
    </PageLayout>
  );
};

export default Discover;
