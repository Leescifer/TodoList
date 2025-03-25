import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DashBoard = () => {
    const dashBoardItems = [
        { id: 1, title: "Dashboard" },
        { id: 2, title: "Profile" },
        { id: 3, title: "Calendar" },
    ];

    return (
        <div>
            <h1>My Dashboard</h1>
            <ul>
                {dashBoardItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/dashboard/${item.id}`}>
                            <h3>{item.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DashBoardItems = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Dashboard Item {id}</h2>
            <p>Details about item {id} go here.</p>
            <Link to="/dashboard">Back to Dashboard</Link>
        </div>
    );
};

export { DashBoard, DashBoardItems };
