import React, { useState } from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            background: '#fff',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            overflowY: 'auto',
            maxHeight: '80vh',
        },
        closeBtn: {
            marginTop: '15px',
            padding: '8px 16px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        projectButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 8px',           // smaller padding
            background: 'transparent',    // no background
            color: '#007bff',             // just blue text
            border: '1px solid #007bff',  // thin border
            borderRadius: '4px',          // slight rounded corners
            cursor: 'pointer',
            fontSize: '14px',             // slightly smaller text
            transition: 'all 0.2s ease',  // smooth hover transition
        },

        link: {
            color: '#007bff',
            textDecoration: 'underline',
            wordBreak: 'break-word'
        }
    };

    // helper to detect if a point is a URL
    const isURL = (text) => {
        try {
            const url = new URL(text);
            return url.protocol === "http:" || url.protocol === "https:";
        } catch {
            return false;
        }
    };

    return (
        <>
            <div className="project__card" key={item.id}>
                <h3 className="project__title">{item.title}</h3>
                <button onClick={handleOpen} style={styles.projectButton}>
                    View <HiOutlineArrowSmRight />
                </button>
            </div>

            {showModal && (
                <div style={styles.overlay} onClick={handleClose}>
                    <div style={styles.content} onClick={(e) => e.stopPropagation()}>
                        <h2>{item.title} Details</h2>
                        <ul>
                            {item.points.map((point, index) => (
                                <li key={index}>
                                    {isURL(point) ? (
                                        <a href={point} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                            {point}
                                        </a>
                                    ) : (
                                        point
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button style={styles.closeBtn} onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectItems;
