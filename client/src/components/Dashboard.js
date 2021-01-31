import React, { useState } from 'react';
// import axios from 'axios';
// import api from '../constants/api';
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = () => {
  const [data, setData] = useState({});

  const getDataFromSidebar = (dataFromSidebar) => setData(dataFromSidebar);

  return (
    <div className='container' style={{ padding: '50px' }}>
      <div className='row'>
        <div className='col-md-4'>
          <Sidebar
            getInitialData={setData}
            getDataFromSidebar={getDataFromSidebar}
            data={data}
          />
        </div>
        <div className='col-md-8'>
          <Main data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
