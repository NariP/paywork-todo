import React from 'react';
import ReactDOM from 'react-dom';

const Portals: React.FC = ({ children }) => {
  const globalPortals = document.getElementById('root-portals') as Element;
  return ReactDOM.createPortal(children, globalPortals);
};

export default Portals;
