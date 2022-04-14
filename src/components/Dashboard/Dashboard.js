import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [sells,setSells]=useState([])
    useEffect(()=>{
        axios.get('./data.json')
        .then(data =>setSells(data.data))

    },[])
    return (
        <div style={{backgroundCOlor:'black' }}>
           <div className='my-5 d-flex justify-content-center'>
           <BarChart width={800} height={400} data={sells}>
            <Bar dataKey="revenue" fill="#8884d8" />
        <XAxis dataKey="investment"></XAxis>
        <Tooltip />
        <YAxis></YAxis>
        </BarChart>
           </div>
           {/* Area Chart */}

        <div className='d-flex justify-content-center my-5'>
        <AreaChart width={730} height={250} data={sells}
  margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  
</AreaChart>
        </div>
       
        
        </div>
       
        
        

        


    );
};

export default Dashboard;