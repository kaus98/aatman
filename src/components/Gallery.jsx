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
    const images = [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-header">
                <span className="subheading">Curated Spaces</span>
                <h2>The Architecture</h2>
            </div>
            <div className="gallery-grid">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-item" onClick={() => openModal(img)}>
                        <img src={img} alt={`Aatman Space ${idx + 1}`} loading="lazy" />
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
