import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // Fungsi untuk menampilkan tombol ketika halaman di-scroll lebih dari 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`scroll-to-top ${visible ? 'active' : ''}`} onClick={scrollToTop}>
         <FaArrowUp />
        </div>
    );
};

export default ScrollToTop;
