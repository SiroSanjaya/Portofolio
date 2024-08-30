import React, { useEffect, useState } from 'react';


const Preloader = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulasi loading atau fetch data
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 900); // Waktu loading bisa disesuaikan

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="preloader"
            className={loaded ? 'loaded' : ''}
        >
            <div className="line"></div>
        </div>
    );
};

export default Preloader;
