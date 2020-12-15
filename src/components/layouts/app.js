import React from 'react';
import Sidebar from '../navigation/sidebar';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>
        <div className="content-container">
          {children}
        </div>
      </main>
    </div>
  )
}

export default AppLayout;