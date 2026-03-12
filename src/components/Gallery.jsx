import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMaximized, setIsMaximized] = useState(false);

    const openModal = (img) => {
        setSelectedImage(img);
        setIsMaximized(false);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
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

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-header">
                <span className="subheading">Curated Spaces</span>
                <h2>The Architecture</h2>
            </div>
            <div className="gallery-grid">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-item" onClick={() => openModal(img.src)}>
                        <img src={img.thumb} alt={`Aatman Space ${idx + 1}`} loading="lazy" />
                        <div className="img-overlay"></div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <button className="modal-close" onClick={closeModal} aria-label="Close modal">&times;</button>
                    <button className="modal-maximize" onClick={toggleMaximize} aria-label={isMaximized ? "Minimize" : "Maximize"}>
                        {isMaximized ? '⤓' : '⤢'}
                    </button>
                    <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedImage} 
                            alt="Selected space full view" 
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
