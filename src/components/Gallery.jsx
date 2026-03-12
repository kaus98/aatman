import React, { useState } from 'react';
import { HiOutlineX, HiOutlineArrowsExpand, HiOutlineMinus, HiOutlineDownload, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import './Gallery.css';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isMaximized, setIsMaximized] = useState(false);

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsMaximized(false);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto';
    };

    const toggleMaximize = (e) => {
        e.stopPropagation();
        setIsMaximized(!isMaximized);
    };

    const galleryFiles = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,JPG}', { eager: true });
    
    const images = Object.keys(galleryFiles).map(path => {
        const file = path.split('/').pop();
        return {
            src: `${import.meta.env.BASE_URL}gallery/${file}`,
            thumb: `${import.meta.env.BASE_URL}gallery/thumbnails/${file}`
        };
    });

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    const downloadImage = (e) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            const currentImg = images[selectedIndex];
            const link = document.createElement('a');
            link.href = currentImg.src;
            link.download = currentImg.src.split('/').pop() || 'aatman-image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-header">
                <span className="subheading">Curated Spaces</span>
                <h2>The Architecture</h2>
            </div>
            <div className="gallery-grid">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-item" onClick={() => openModal(idx)}>
                        <img src={img.thumb} alt={`Aatman Space ${idx + 1}`} loading="lazy" />
                        <div className="img-overlay"></div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                        <HiOutlineX />
                    </button>
                    <button className="modal-maximize" onClick={toggleMaximize} aria-label={isMaximized ? "Minimize" : "Maximize"}>
                        {isMaximized ? <HiOutlineMinus /> : <HiOutlineArrowsExpand />}
                    </button>
                    <button className="modal-download" onClick={downloadImage} aria-label="Download image">
                        <HiOutlineDownload />
                    </button>
                    <button className="modal-nav prev" onClick={prevImage} aria-label="Previous image">
                        <HiOutlineChevronLeft />
                    </button>
                    <button className="modal-nav next" onClick={nextImage} aria-label="Next image">
                        <HiOutlineChevronRight />
                    </button>
                    <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={images[selectedIndex].src} 
                            alt={`Selected space full view ${selectedIndex + 1}`} 
                            className={`modal-image ${isMaximized ? 'maximized' : ''}`}
                            onClick={toggleMaximize}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
