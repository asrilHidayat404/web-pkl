import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Step2Form = ({ onPrev, onNext}) => {
  const [nomorWA, setNomorWA] = useState('');
  const [warn, setWarn] = useState('')

  const handleNext = () => {
    nomorWA == "" ? setWarn("field harus diisi") : onNext({ nomorWA });
  };
  return (
    <div className='form'>
      <h2 style={{color: 'red', fontWeight:"normal"}}>Nomor WhatsApp</h2>
      <small>nomor telepon yg terdaftar di WhatsApp</small>
      <div>
        <TextField
          label="Contoh: 082333586618"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={nomorWA}
          onChange={(e) => setNomorWA(e.target.value)}
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

export default Step2Form;
