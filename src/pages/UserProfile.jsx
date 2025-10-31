import React from "react";
import ProfileDetails from "../components/ProfileDetails";
import DeliveryDetail from "../components/DeliveryDetail";
import LogoutPage from "../Auth/LogoutPage";
import './UserProfile.css'
const UserProfile = ({setIsLoggedIn}) => {
  return (
    <main className="account-main">
      <div className="account-container">
        {/* Header */}
        <div className="account-header">
          <h1>Your Account</h1>
          <p>Manage your profile, delivery details, and account settings.</p>
        </div>
            <ProfileDetails />
            <DeliveryDetail />
            <LogoutPage />
      </div>
    </main>
  );
};

export default UserProfile;
