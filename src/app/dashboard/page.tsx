import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Agent Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>Upcoming Trips</h2>
                    <ul>
                        <li>Trip to Paris - 12/12/2023</li>
                        <li>Trip to New York - 01/15/2024</li>
                        <li>Trip to Tokyo - 03/22/2024</li>
                    </ul>
                </div>
                <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>Recent Bookings</h2>
                    <ul>
                        <li>John Doe - Paris</li>
                        <li>Jane Smith - New York</li>
                        <li>Bob Johnson - Tokyo</li>
                    </ul>
                </div>
                <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>Messages</h2>
                    <ul>
                        <li>Message from John Doe</li>
                        <li>Message from Jane Smith</li>
                        <li>Message from Bob Johnson</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;