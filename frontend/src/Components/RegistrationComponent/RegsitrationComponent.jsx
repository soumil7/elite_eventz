import React from 'react';

const RegistrationComponent = () => {
  const openGoogleForm = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/your-google-form-id/viewform'; // Paste your Google Form link here
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Event Registration</h1>
      <p>Fill in the form to register for the event.</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSezm6l-4OtZ3ECHKqcWzP1vGzsyhakk_aWzh9ArIxLlvPeCqw/viewform?embedded=true" width="640" height="1256" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
};

export default RegistrationComponent;


// import React from 'react';
// import './RegistrationComponent.css'

// const RegistrationComponent = () => {
//   const openGoogleForm = () => {
//     // Replace with your actual Google Form link
//     const googleFormUrl = 'https://docs.google.com/forms/d/your-google-form-id/viewform';
//     window.open(googleFormUrl, '_blank');
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Event Registration</h2>
//       <p>Fill in the form to register for the event.</p>
//       <button 
//         onClick={openGoogleForm}
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//       >
//         Open Registration Form
//       </button>
//     </div>
//   );
// };

// export default RegistrationComponent;
