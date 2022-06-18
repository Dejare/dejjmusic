import React, { useState, useEffect } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

const Dashboard = () => {
    const [Mobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else if (window.innerWidth < 1024) {
            setMobile(false);
        } else {
            setMobile(false);
        }

    }, []);

    return (
        <>
            {Mobile ? (
                <div className="flex flex-col md:flex-row md:max-w-screen">
                    <Right />
                    <Left />
                    <Center />
                </div>
            ) : (
                <div className="flex flex-col md:flex-row md:max-w-screen">
                    <Left />
                    <Center />
                    <Right />
                </div>
            )}
        </>
    );
};

export default Dashboard;
