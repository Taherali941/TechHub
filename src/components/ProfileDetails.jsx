import React from 'react'
import './ProfileDetails.css'
const ProfileDetails = () => {
  return (
    <div>
                {/* Profile Section */}
        <section>
          <div className="section-header">
            <h2>Profile Details</h2>
          </div>

          <div className="section-card">
            <div className="profile-header">
              <div className="profile-info">
                <div
                  className="profile-avatar"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEAAlUfUeSE9uXsBSaO7weNMIFVSPQVZckz71KgJz4w60tAOgnF3HGjP278wwqu58mT-Vl3w_xtZdHQV0DhJVS11NCOLXRVeZdbeHw3mONoF7ES0vBwcMwCf7PxkCI1g1xroRSFq8mp_DhAX--U_IRhqLPvuIYtqyHFeQs16G5-CRpTKo05E-3O7mJNuPHl_uL60y0frZ-0HaVJljucH3gN7XOwYSoiX-0HoBNai0npDD8neRITfinfxdSwXWYcjWHA3K-G_QhvCWn")',
                  }}
                ></div>
                <div>
                  <h3>Alex Doe</h3>
                  <p>alex.doe@example.com</p>
                </div>
              </div>

              <button className="edit-btn">
                <span className="material-symbols-outlined">edit</span>
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="profile-details">
              <dl>
                <div className="detail-row">
                  <dt>Full Name</dt>
                  <dd>Alex Doe</dd>
                </div>
                <div className="detail-row">
                  <dt>Email Address</dt>
                  <dd>alex.doe@example.com</dd>
                </div>
                <div className="detail-row">
                  <dt>Phone Number</dt>
                  <dd>+1 (555) 123-4567</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ProfileDetails