import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const allBookList = useSelector((state) => {
    return state.books;
  });

  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover List <span className='badge badge-sm bg-primary'>{allBookList.discoverList.length}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{allBookList.readingList.length}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{allBookList.finishedList.length}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
