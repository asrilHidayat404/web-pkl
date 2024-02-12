import React, { useState } from 'react';
import Logo from '../LogoSandiKami.jpg';
import Step1Form from './FormComponents/Step1Form';
import Step2Form from './FormComponents/Step2Form';
import Step3Form from './FormComponents/Step3Form';
import Step4Form from './FormComponents/Step4Form';
import Step5Form from './FormComponents/Step5Form';
import Step6Form from './FormComponents/Step6Form';
import Step5NIPForm from './FormComponents/Step5NIPForm';

const LandingPageTTE = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // const handleSubmit = async (data) => {
  //   console.log(data)

  //   try {
  //     const response = await fetch('http://localhost:3001/api/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //   });

  
  //     const result = await response.json();
  //     console.log(result);
  //     // Handle feedback atau navigasi setelah penyimpanan berhasil
  //     alert(result.message);
  
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle error, tampilkan pesan atau lakukan sesuatu yang sesuai
  //     alert(error);

  //   }
  // };
  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('fileImg', data.fileImg); // Ubah ini
      formData.append('nama', data.nama); // Tambahkan ini
      formData.append('nomorWA', data.nomorWA); // Tambahkan ini
      formData.append('email', data.email); // Tambahkan ini
      formData.append('status', data.status); // Tambahkan ini
      formData.append('nip', data.nip); // Tambahkan ini
      formData.append('jabatan', data.jabatan); // Tambahkan ini
  
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        // Hapus headers
        body: formData, // Ganti body dengan formData
      });
  
      const result = await response.json();
      console.log(result);
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
      alert(error);
    }
  };
  
  
  return (
    <div className="TTE">
      <div className="hero">
        {currentStep === 0 && (
          <>
            <div className="poster">
              <img src={Logo} alt="" />
            </div>
            <header>
              <h1>Formulir Permohonan Tandatangan Elektronik</h1>
              <p>Silahkan isi dengan benar untuk kelancaran penerbitan Tandatangan Elektronik Anda</p>
            </header>
            <div className="start">
              <button onClick={() => setCurrentStep(1)}>Start <i className='fa fa-arrow-right'></i></button>
            </div>
          </>
        )}
        {currentStep > 0 && (
          <div>
            {currentStep === 1 && (
              <Step1Form onNext={handleNext} onPrev={handlePrev} />
            )}
            {currentStep === 2 && (
              <Step2Form onNext={handleNext} onPrev={handlePrev} />
            )}
            {currentStep === 3 && (
              <Step3Form onNext={handleNext} onPrev={handlePrev} />
            )}
            {currentStep === 4 && (
              <Step4Form onNext={handleNext} onPrev={handlePrev} />
            )}
            {currentStep === 5 && (
              (formData && formData.status === 'ASN') ? (
                <Step5NIPForm onNext={handleNext} onPrev={handlePrev}/>
              ) : (formData && formData.status === 'Non ASN') ? (
                <Step5Form onNext={handleNext} onPrev={handlePrev}/>
              ) : null
            )}
            {currentStep === 6 && (
              <Step6Form onSubmit={handleSubmit} onPrev={handlePrev} data={{ ...formData }}/>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageTTE;

