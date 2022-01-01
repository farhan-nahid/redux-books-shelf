import React from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import books from '../fakeData/books.json';

const Discover = () => {
  return (
    <PageLayout>
      {
        // map book data
        books?.map((book) => (
          <Book key={book.id} book={book} remove='disable' add='no' done='disable' />
        ))
      }
    </PageLayout>
  );
};

export default Discover;
