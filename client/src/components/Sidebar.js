import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../constants/api';

const Sidebar = ({ getDataFromSidebar, getInitialData }) => {
  const [employees, setEmployees] = useState([]);

  const FONT_SIZE_MAPPING = {
    1: '10px',
    2: '15px',
    3: '20px',
    4: '25px',
    5: '30px',
  };

  useEffect(() => {
    axios
      .get(`${api}/employees`)
      .then(({ data }) => {
        setEmployees(data.data);
        if (data && data.data) {
          getInitialData(data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getInitialData]);

  return (
    <ul style={{ listStyle: 'none' }}>
      {employees?.map((employee) => (
        <li
          key={employee._id}
          style={{
            fontSize: FONT_SIZE_MAPPING[employee.popularity],
            cursor: 'pointer',
            marginBottom: 20,
          }}
          onClick={() => getDataFromSidebar(employee)}
        >
          {employee.name}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
