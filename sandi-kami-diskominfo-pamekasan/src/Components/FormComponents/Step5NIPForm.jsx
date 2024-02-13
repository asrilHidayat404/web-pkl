import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Step5NIPForm = ({ onPrev, onNext }) => {
  const [nip, setNip] = useState('');
  const [warn, setWarn] = useState('')

  const handleNext = () => {
    nip === "" ? setWarn("The number of characters should not be less than the minimum value: 16.") : onNext({ nip });
  };

  return (
    <div className='form'>
      <h2 style={{color: 'red', fontWeight:"normal"}}>NIP/NI PPPK</h2>
      <small>Isi NIP atau NI PPPK</small>
      <div>
      <TextField
        label=""
        margin="normal"
        variant="outlined"
        color="secondary"
        value={nip}
        onChange={(e) => setNip(e.target.value)}
        className='input'
      />
      </div>
      <div className="btnNavigate">
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

export default Step5NIPForm;
