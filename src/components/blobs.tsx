import React, { useEffect, useState } from "react";

const Blobs: React.FC = () => {
    const [pageCenter, setPageCenter] = useState(0);

    useEffect(() => {
        // Calculate the center of the full page height (scrollable height)
        const center = document.documentElement.scrollHeight / 2;
        setPageCenter(center);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <img src="./blob.svg" alt="Blob" style={{ position: "absolute", top: -635, left: -700, zIndex: -10, width: "1200px", filter: "blur(600px)", opacity: 0.25, }}/>
            <img src="./blob.svg"alt="Blob" style={{position: "absolute", top: `${pageCenter}px`, right: -700, zIndex: -10, width: "1200px", filter: "blur(600px)", opacity: 0.25, transform: "translateY(-50%)",  }} />
            <img src="./blobBottom.svg"alt="Blob"style={{position: "absolute", bottom: -150, left: -700, zIndex: -10, width: "1200px", filter: "blur(600px)", opacity: 0.25,  }} />
        </div>
    );
};

export default Blobs;