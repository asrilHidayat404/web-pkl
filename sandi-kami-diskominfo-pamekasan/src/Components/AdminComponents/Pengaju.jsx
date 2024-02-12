import React, { useEffect, useState } from 'react';
import Header from './Partial/Header';
import SideBar from './Partial/SideBar';
import { useNavigate } from 'react-router-dom';
import Main from './Partial/Main';
import PengajuLayout from './Layouts/PengajuLayout';


const Pengaju = () => {
  const navigate = useNavigate();
  const [pengaju, setPengaju] = useState([])
  let number = 1
  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("@_@");
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
  
  return (
    <div>
      <div className="flex h-screen bg-gray-200">
        <div className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" />
        <SideBar handleLogOut={handleLogOut}/>
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <Main Layout={PengajuLayout} pengaju={pengaju} />
        </div>
      </div>
    </div>
  );
};

export default Pengaju;
