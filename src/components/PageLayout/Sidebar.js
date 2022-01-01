import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover List
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{books.readingList.length}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{books.finishedList.length}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
