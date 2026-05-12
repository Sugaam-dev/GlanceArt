// // import React from 'react';
// // import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
// // import './SocialSidebar.css';

// // const SocialSidebar = () => {
// //   return (
// //     <div className="sticky-social-sidebar">
// //       <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="social-icon whatsapp">
// //         <FaWhatsapp size={22} />
// //       </a>
// //       <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="social-icon instagram">
// //         <FaInstagram size={22} />
// //       </a>
// //       <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer" className="social-icon youtube">
// //         <FaYoutube size={22} />
// //       </a>
// //       <a href="mailto:info@example.com" className="social-icon email">
// //         <FaEnvelope size={20} />
// //       </a>
// //     </div>
// //   );
// // };

// // export default SocialSidebar;

// import React from 'react';
// import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
// import './SocialSidebar.css';

// const SocialSidebar = () => {
//   return (
//     <div className="fixed-social-sidebar">
//       <div className="social-pill">
//         <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="s-link whatsapp">
//           <FaWhatsapp size={22} />
//         </a>
//         <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="s-link instagram">
//           <FaInstagram size={22} />
//         </a>
//         <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer" className="s-link youtube">
//           <FaYoutube size={24} />
//         </a>
//         <a href="mailto:info@example.com" className="s-link email">
//           <FaEnvelope size={20} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialSidebar;

import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="fixed-social-sidebar">
      <div className="social-pill">
        <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="s-link facebook">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="s-link instagram">
          <FaInstagram size={22} />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer" className="s-link youtube">
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;