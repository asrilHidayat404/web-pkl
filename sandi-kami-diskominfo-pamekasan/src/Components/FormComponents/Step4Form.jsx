import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core';

const Step4Form = ({ onPrev, onNext }) => {
  const [status, setStatus] = useState('');
  const [warn, setWarn] = useState('');

  const handleNext = () => {
    status === '' ? setWarn('Field harus diisi') : onNext({ status });
  };

  return (
    <div className='form'>
      <h2 style={{ color: 'red', fontWeight: 'normal' }}>ASN/ Non ASN</h2>
      <small>Pilih ASN untuk PNS/PPPK, Pilih Non ASN untuk selain ASN</small>
      <RadioGroup
        aria-label="Pilihan"
        name="pilihan"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <div className='optionBox'>
          <FormControlLabel
            value="ASN"
            control={<Radio />}
            label="ASN"
            className='option'
          />
          <FormControlLabel
            value="Non ASN"
            control={<Radio />}
            label="Non ASN"
            className='option'
          />
        </div>
      </RadioGroup>
      <div className='btnNavigate'>
        <Button onClick={onPrev} variant="contained" color="secondary">
          Kembali
        </Button>
        <div
          className="alert"
          style={{
            color: '#eaeaea',
            backgroundColor: '#dc2626',
            padding: '0',
            borderRadius: '5px',
          }}
        >
          {warn}
        </div>
        <Button onClick={handleNext} variant="contained" color="primary">
          Berikutnya
        </Button>
      </div>
      {/* Render Step5Form atau Step5NIPForm berdasarkan nilai status */}
      {/* {status === 'ASN' ? <Step5NIPForm onNext={onNext} onPrev={onPrev} /> : status === 'Non ASN' ? <Step5Form onNext={onNext} onPrev={onPrev} /> : null} */}
    </div>
  );
};

export default Step4Form;


