import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [sells,setSells]=useState([])
    useEffect(()=>{
        axios.get('./data.json')
        .then(data =>setSells(data.data))

    },[])
    return (
        <BarChart width={800} height={400} data={sells}>
            <Bar dataKey="revenue" fill="#8884d8" />
        <XAxis dataKey="investment"></XAxis>
        <Tooltip />
        <YAxis></YAxis>
        </BarChart>
    );
};

export default Dashboard;