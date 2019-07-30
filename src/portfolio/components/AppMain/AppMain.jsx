import React from 'react';

import './AppMain.scss';

import Header from '../Header/Header';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <div className="row">
        <Header />
        <h2>{welcomeMessage}</h2>
      </div>
    </div>
  );
};

export default AppMain;
