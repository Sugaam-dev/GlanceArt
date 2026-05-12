

import React, { useState, useEffect } from 'react';
import { Pencil, Info, X, ChevronDown } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage = () => {
  // Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  
  // Profile Name States - Pulling directly from registration data
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || "");
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || "");
  const [tempFirstName, setTempFirstName] = useState("");
  const [tempLastName, setTempLastName] = useState("");

  // Address States
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    firstName: '', lastName: '', company: '', address: '', 
    apartment: '', city: '', state: 'Andaman and Nicob...', pin: '', phone: ''
  });

  const userEmail = localStorage.getItem('userEmail') || "rushilpa14@gmail.com";

  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem('userAddresses') || "[]");
    setSavedAddresses(addresses);
  }, []);

  const handleSaveProfile = () => {
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    localStorage.setItem('firstName', tempFirstName);
    localStorage.setItem('lastName', tempLastName);
    setIsEditModalOpen(false);
  };

  const handleSaveAddress = () => {
    const updatedAddresses = [...savedAddresses, newAddress];
    setSavedAddresses(updatedAddresses);
    localStorage.setItem('userAddresses', JSON.stringify(updatedAddresses));
    setIsAddressModalOpen(false);
    setNewAddress({ firstName: '', lastName: '', company: '', address: '', apartment: '', city: '', state: 'Andaman and Nicob...', pin: '', phone: '' });
  };

  return (
    <div className="profile-page-scoped">
      <main className="profile-main-content">
        <h1 className="profile-main-title">Profile</h1>

        {/* Identity Section */}
        <section className="profile-info-card">
          <div className="profile-data-field">
            <div className="profile-label-row">
              <label>Name</label>
              <Pencil size={12} className="profile-edit-pencil" onClick={() => {
                setTempFirstName(firstName);
                setTempLastName(lastName);
                setIsEditModalOpen(true);
              }} />
            </div>
            {/* Displays name registered or updated in localStorage */}
            <div className="profile-name-display">{firstName} {lastName}</div>
          </div>
          <div className="profile-data-field">
            <label>Email</label>
            <p className="profile-user-email">{userEmail}</p>
          </div>
        </section>

        {/* Addresses Section */}
        <section className="profile-info-card">
          <div className="profile-card-header">
            <h2 className="profile-subtitle">Addresses</h2>
            <button className="profile-add-address" onClick={() => setIsAddressModalOpen(true)}>+ Add</button>
          </div>
          
          {savedAddresses.length === 0 ? (
            <div className="profile-empty-alert-box">
              <Info size={18} className="profile-info-icon" />
              <p>No addresses added</p>
            </div>
          ) : (
            <div className="saved-addresses-list">
              {savedAddresses.map((addr, index) => (
                <div key={index} className="address-item">
                  <p><strong>{addr.firstName} {addr.lastName}</strong></p>
                  <p>{addr.address}, {addr.apartment && addr.apartment + ','} {addr.city}</p>
                  <p>{addr.state} - {addr.pin}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Edit Profile Modal */}
        {isEditModalOpen && (
          <div className="modal-overlay">
            <div className="edit-modal-card">
              <div className="modal-header">
                <h3>Edit profile</h3>
                <X className="close-x" onClick={() => setIsEditModalOpen(false)} />
              </div>
              <div className="modal-body">
                <div className="input-row">
                  <div className="input-group">
                    <input type="text" placeholder="First name" value={tempFirstName} onChange={(e) => setTempFirstName(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <input type="text" placeholder="Last name" value={tempLastName} onChange={(e) => setTempLastName(e.target.value)} />
                  </div>
                </div>
                <div className="input-group email-readonly">
                  <label>Email</label>
                  <input type="email" value={userEmail} readOnly />
                </div>
              </div>
              <div className="modal-footer">
                <button className="cancel-btn" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                <button className="save-btn active-save" onClick={handleSaveProfile}>Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Add Address Modal */}
        {isAddressModalOpen && (
          <div className="modal-overlay">
            <div className="address-modal-card">
              <div className="modal-header">
                <X className="close-x right-aligned" onClick={() => setIsAddressModalOpen(false)} />
              </div>
              <div className="modal-body scrollable">
                <div className="input-row">
                  <div className="input-group"><input type="text" placeholder="First name" onChange={(e) => setNewAddress({...newAddress, firstName: e.target.value})} /></div>
                  <div className="input-group"><input type="text" placeholder="Last name" onChange={(e) => setNewAddress({...newAddress, lastName: e.target.value})} /></div>
                </div>
                <div className="input-group"><input type="text" placeholder="Company" onChange={(e) => setNewAddress({...newAddress, company: e.target.value})} /></div>
                <div className="input-group"><input type="text" placeholder="Address" onChange={(e) => setNewAddress({...newAddress, address: e.target.value})} /></div>
                <div className="input-group"><input type="text" placeholder="Apartment, suite, etc (optional)" onChange={(e) => setNewAddress({...newAddress, apartment: e.target.value})} /></div>
                <div className="input-row">
                  <div className="input-group"><input type="text" placeholder="City" onChange={(e) => setNewAddress({...newAddress, city: e.target.value})} /></div>
                  <div className="input-group select-group">
                    <label>State</label>
                    <div className="select-wrapper">
                      <span>{newAddress.state}</span>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                  <div className="input-group"><input type="text" placeholder="PIN code" onChange={(e) => setNewAddress({...newAddress, pin: e.target.value})} /></div>
                </div>
                <div className="input-group phone-group">
                  <label>Phone</label>
                  <div className="phone-input-wrapper">
                    <div className="flag-select">🇮🇳 <ChevronDown size={12} /></div>
                    <input type="text" placeholder="+91" onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})} />
                  </div>
                </div>
              </div>
              <div className="modal-footer sticky-footer">
                <button className="cancel-text-btn" onClick={() => setIsAddressModalOpen(false)}>Cancel</button>
                <button className="gold-save-btn" onClick={handleSaveAddress}>Save</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;