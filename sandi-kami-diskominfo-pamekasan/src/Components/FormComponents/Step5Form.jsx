import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Step5Form = ({ onPrev, onNext }) => {
  const [jabatan, setJabatan] = useState('');
  const [warn, setWarn] = useState('')

  const handleNext = () => {
    jabatan === "" ? setWarn("field harus diisi") : onNext({ jabatan });
  };

  return (
    <div className='form'>
      <h2 style={{color: 'red', fontWeight:"normal"}}>Jabatan Pemerintahan</h2>
      <small>Isi sesuai dengan jabatan pemerintahan yang diemban</small>
      <div>
      <TextField
        label="Contoh: Kepala Desa Klampar"
        margin="normal"
        variant="outlined"
        color="secondary"
        value={jabatan}
        onChange={(e) => setJabatan(e.target.value)}
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

export default Step5Form;
