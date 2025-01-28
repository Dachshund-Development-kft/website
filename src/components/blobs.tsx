import React, { useEffect, useState } from 'react';

const Blobs: React.FC = () => {
    const [pageCenter, setPageCenter] = useState(0);

    useEffect(() => {
        const center = window.innerHeight / 2;
        setPageCenter(center);
    }, []);

    return (
        <div className='overflow-hidden'>
            <img src="./blob.svg" alt="Blob" style={{ position: 'fixed', top: -635, left: -700, zIndex: -1, width: '1200px', filter: 'blur(600px)', opacity: 0.25 }} />
            <img src="./blob.svg" alt="Blob" style={{ position: 'fixed', top: `${pageCenter}px`, right: -700, zIndex: -1, width: '1200px', filter: 'blur(600px)', opacity: 0.25, transform: 'translateY(-50%)' }} />
            <img src="./blobBottom.svg" alt="Blob" style={{ position: 'fixed', top: `${pageCenter + pageCenter - 435}px`, left: -700, zIndex: -1, width: '1200px', filter: 'blur(600px)', opacity: 0.25 }} />
        </div>
    );
};

export default Blobs;