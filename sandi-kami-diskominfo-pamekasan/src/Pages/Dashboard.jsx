import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Header from '../Components/AdminComponents/Partial/Header';
import SideBar from '../Components/AdminComponents/Partial/SideBar';
import Main from '../Components/AdminComponents/Partial/Main';
import HomeLayout from '../Components/AdminComponents/Layouts/HomeLayout';
const Dashboard = () => {
  const navigate = useNavigate();
  const [pengaju, setPengaju] = useState([])

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload()
  };

  useEffect(()=> {
    getPengaju()
  },[])

  const getPengaju = async () => {
    try {
      const response = await fetch('http://localhost:3001/getPengaju').then(response => response.json())
      const result = response
      setPengaju(result)
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log(pengaju)
  return (
  <div>
    <div className="flex h-screen bg-gray-200">
      <SideBar handleLogOut={handleLogOut}/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <Main Layout={HomeLayout} pengaju={pengaju}/>
      </div>
    </div>
  </div>

  );
};

export default Dashboard;