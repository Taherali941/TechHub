import React from 'react'
import './DeliveryDetail.css'
const DeliveryDetail = () => {
    return (
        <div>
            <section>
                <div className="delivery-header">
                    <h2>Delivery Details</h2>
                    <button className="add-address-btn">
                        <span className="material-symbols-outlined">add_location</span>
                        <span>Add New Address</span>
                    </button>
                </div>

                <div className="section-card">
                    <div className="delivery-addresses">
                        <div className="address-card">
                            <span className="address-default">Default</span>
                            <h3>Home</h3>
                            <p>123 Market St, San Francisco, CA 94103</p>
                            <div className="address-actions">
                                <button>Edit</button>
                                <span>|</span>
                                <button className="remove">Remove</button>
                            </div>
                        </div>

                        <div className="address-card">
                            <h3>Office</h3>
                            <p>456 Main St, San Francisco, CA 94105</p>
                            <div className="address-actions">
                                <button>Edit</button>
                                <span>|</span>
                                <button className="remove">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DeliveryDetail