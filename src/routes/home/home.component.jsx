import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component'


function home() {
  return (
    <div>
     < Directory/>
     <Outlet />
    </div>
    
  );
}

export default home;