import React from "react";

const Blobs: React.FC = () => {
    return (
        <>
             <div className="fixed inset-0 bg-cover bg-center filter z-[-2]" style={{ backgroundImage: "url(/images/blobs.svg)" }}></div>
        </>
    );
};

export default Blobs;