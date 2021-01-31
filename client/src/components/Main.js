import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../constants/api';

const Main = ({ data }) => {
  const [employeePopularity, setEmployeePopularity] = useState(data);

  useEffect(() => {
    axios
      .get(`${api}/employee/${data?._id}`)
      .then(({ data }) => {
        setEmployeePopularity(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  console.log('employeePopularity: ', employeePopularity.popularity);

  const changePopularity = (e) => {
    setEmployeePopularity({
      ...employeePopularity,
      [e.target.name]: e.target.value,
    });
    axios
      .put(`${api}/employee/${data._id}`, employeePopularity, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(({ data }) => {
        setEmployeePopularity(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='row'>
      <div className='col-md-3'>
        <img
          src={require(`../assets/images/profile_pics/Vito Corleone.jpg`)}
          alt={data.name}
        />
      </div>
      <div className='col-md-9'>
        <div>{data.name}</div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 20 }}>Popularity</div>
          <div>
            <input
              type='range'
              min='0'
              max='5'
              name='popularity'
              value={employeePopularity.popularity}
              onChange={changePopularity}
              style={{ width: '100%' }}
            />
          </div>
        </div>{' '}
        <h3 style={{ marginTop: 20 }}>Biography </h3>
        <br />
        <>{data.biography}</>
      </div>
    </div>
  );
};

export default Main;
