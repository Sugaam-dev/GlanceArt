// // import React, { useState, useRef } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './ShopOtpPage.css';

// // const ShopOtpPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const userEmail = location.state?.email || "your email";
  
// //   const [otp, setOtp] = useState(new Array(6).fill(""));
// //   const inputRefs = useRef([]);

// //   const handleChange = (element, index) => {
// //     if (isNaN(element.value)) return false;

// //     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

// //     // Focus next input
// //     if (element.value !== "" && index < 5) {
// //       inputRefs.current[index + 1].focus();
// //     }
// //   };

// //   const handleKeyDown = (e, index) => {
// //     if (e.key === "Backspace" && !otp[index] && index > 0) {
// //       inputRefs.current[index - 1].focus();
// //     }
// //   };

// //   return (
// //     <div className="shop-auth-container">
// //       <div className="shop-auth-card">
// //         <header className="shop-card-header">
// //           <div className="shop-brand-text">shop</div>
// //           <span className="shop-merchant-name">Glance Art</span>
// //         </header>

// //         <div className="shop-otp-content">
// //           <h2 className="shop-title">Create Shop account</h2>
// //           <p className="shop-user-email">{userEmail}</p>

// //           <p className="shop-otp-instruction">
// //             Enter the code sent to <strong>your email</strong>
// //           </p>

// //           <div className="otp-input-container">
// //             {otp.map((data, index) => (
// //               <input
// //                 key={index}
// //                 type="text"
// //                 maxLength="1"
// //                 className={`otp-box ${data ? 'active' : ''}`}
// //                 value={data}
// //                 ref={(el) => (inputRefs.current[index] = el)}
// //                 onChange={(e) => handleChange(e.target, index)}
// //                 onKeyDown={(e) => handleKeyDown(e, index)}
// //               />
// //             ))}
// //           </div>

// //           <button 
// //             className="shop-change-email-btn" 
// //             onClick={() => navigate('/login/shop')}
// //           >
// //             Change email address
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopOtpPage;

// import React, { useState, useRef, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ShopOtpPage.css';

// const ShopOtpPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userEmail = location.state?.email || "rushilpa14@gmail.com";
  
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [isVerifying, setIsVerifying] = useState(false);
//   const inputRefs = useRef([]);

//   // Auto-submit when 6 digits are reached
//   useEffect(() => {
//     if (otp.join("").length === 6) {
//       handleVerify();
//     }
//   }, [otp]);

//   const handleVerify = async () => {
//     setIsVerifying(true);
    
//     // Simulate API call to your FastAPI backend
//     setTimeout(() => {
//       console.log("Verified OTP:", otp.join(""));
//       navigate('/dashboard'); // Final destination
//     }, 2000);
//   };

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false;
//     const newOtp = [...otp];
//     newOtp[index] = element.value;
//     setOtp(newOtp);

//     if (element.value !== "" && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   // Rendering the "Signing you in" view from your second screenshot
//   if (isVerifying) {
//     return (
//       <div className="shop-auth-container">
//         <div className="shop-auth-card">
//           <header className="shop-card-header">
//             <div className="shop-brand-text">shop</div>
//             <span className="shop-merchant-name">Glance Art</span>
//           </header>
//           <div className="shop-loading-content">
//             <div className="shop-avatar-circle">
//               {userEmail.charAt(0).toUpperCase()}
//             </div>
//             <h2 className="shop-loading-text">Signing you in...</h2>
//             <p className="shop-user-email-sub">{userEmail}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Standard OTP entry view (First screenshot)
//   return (
//     <div className="shop-auth-container">
//       <div className="shop-auth-card">
//         <header className="shop-card-header">
//           <div className="shop-brand-text">shop</div>
//           <span className="shop-merchant-name">Glance Art</span>
//         </header>
//         <div className="shop-otp-content">
//           <h2 className="shop-title">Create Shop account</h2>
//           <p className="shop-user-email">{userEmail}</p>
//           <p className="shop-otp-instruction">Enter the code sent to <strong>your email</strong></p>
//           <div className="otp-input-container">
//             {otp.map((data, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 className={`otp-box ${data ? 'active' : ''}`}
//                 value={data}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 onChange={(e) => handleChange(e.target, index)}
//               />
//             ))}
//           </div>
//           <button className="shop-change-email-btn" onClick={() => navigate('/login/shop')}>
//             Change email address
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopOtpPage;

import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ShopOtpPage.css';

const ShopOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use email from previous page state, or a fallback for testing
  const userEmail = location.state?.email || "rushilpa14@gmail.com";
  
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  // Auto-trigger when 6th digit is entered
  useEffect(() => {
    const fullOtp = otp.join("");
    if (fullOtp.length === 6) {
      console.log("6 digits detected, starting verification...");
      handleVerify();
    }
  }, [otp]);

  const handleVerify = () => {
    setIsVerifying(true);
    
    // This delay allows the "Signing you in..." screen to show
    setTimeout(() => {
      console.log("Redirecting to /dashboard now");
      navigate('/dashboard'); 
    }, 2000); 
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // If verifying, show the "Signing you in..." page from your screenshot
  if (isVerifying) {
    return (
      <div className="shop-auth-container">
        <div className="shop-auth-card">
          <header className="shop-card-header">
            <span className="shop-brand-text">shop</span>
            <span className="shop-merchant-name">Glance Art</span>
          </header>
          <div className="shop-loading-content">
            <div className="shop-avatar-circle">
              {userEmail.charAt(0).toUpperCase()}
            </div>
            <h2 className="shop-loading-text">Signing you in...</h2>
            <p className="shop-user-email-sub">{userEmail}</p>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, show the OTP input page
  return (
    <div className="shop-auth-container">
      <div className="shop-auth-card">
        <header className="shop-card-header">
          <span className="shop-brand-text">shop</span>
          <span className="shop-merchant-name">Glance Art</span>
        </header>
        <div className="shop-otp-content">
          <h2 className="shop-title">Create Shop account</h2>
          <p className="shop-user-email">{userEmail}</p>
          <p className="shop-otp-instruction">Enter the code sent to <strong>your email</strong></p>
          <div className="otp-input-container">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className={`otp-box ${data ? 'active' : ''}`}
                value={data}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <button className="shop-change-email-btn" onClick={() => navigate('/login/shop')}>
            Change email address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopOtpPage;