import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Step3Form = ({ onPrev, onNext}) => {
  const [email, setEmail] = useState('');
  const [warn, setWarn] = useState('')

  const handleNext = () => {
    email === "" ? setWarn("field harus diisi") : onNext({ email });
  };
  return (
    <div className='form'>
      <h2 style={{color: 'red', fontWeight:"normal"}}>E-mail Pribadi Kedinasan</h2>
      <small>email pribadi dengan domain .go.id</small>
      <div>
        <TextField
          label="Contoh: nama@pamekasankab.go.id"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default Step3Form;
