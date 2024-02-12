import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Step1Form = ({ onNext, onPrev }) => {
  const [nama, setNama] = useState('');
  const [warn, setWarn] = useState('')

  const handleNext = () => {
    nama == "" ? setWarn("field harus diisi") : onNext({ nama });
  };

  return (
    <div className='form'>
      <h2 style={{color: 'red', fontWeight:"normal"}}>Nama Lengkap</h2>
      <small>Nama Sesuai KTP</small>
      <div>
        <TextField
          label="Nama Sesuai KTP"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className='input'
        />
      </div>
      <div className='btnNavigate'>
        <Button onClick={onPrev} variant="contained" color="secondary">
          Kembali
        </Button>
        <div className="alert" style={{color:"#eaeaea", backgroundColor: "#dc2626", padding: "0", borderRadius: "5px"}}>{warn}</div>
        <Button onClick={handleNext} variant="contained" color="primary">
          Berikutnya
        </Button>
      </div>
    </div>
  );
};

export default Step1Form;
