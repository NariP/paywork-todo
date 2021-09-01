import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div>main page</div>
      <Link to={'/dashboard'}>
        <button>dashboard</button>
      </Link>
    </div>
  );
};

export default Main;
