import React, { useEffect, useState } from 'react';

const Blobs: React.FC = () => {
    const [pageCenter, setPageCenter] = useState(0);
    useEffect(() => {
        const center = document.documentElement.scrollHeight / 2;
        setPageCenter(center);
    }, []);
    return (
        <> 
             <div className="hidden md:block">
                <div className='overflow-hidden'>
                    <img
                        src="./blob.svg"
                        alt="Blob"
                        className="absolute top-[-635px] left-[-700px] w-[1200px] filter blur-[600px] opacity-25 z-[-2]"
                    />
                    <img
                        src="./blob.svg"
                        alt="Blob"
                        className="absolute right-[-700px] w-[1200px] filter blur-[600px] opacity-25 transform -translate-y-[50%] z-[-2]"
                        style={{ top: `${pageCenter}px`, }}
                    />
                    <img
                        src="./blobBottom.svg"
                        alt="Blob"
                        className="absolute left-[-700px] w-[1200px] filter blur-[600px] opacity-25 z-[-2]"
                        style={{ top: `${pageCenter+pageCenter-400}px`, }}
                    />
                </div>
            </div>
            <div className="md:hidden block">
                <div className='overflow-hidden'>
                    <img
                        src="./blob.svg"
                        alt="Blob"
                        className="absolute top-[-150px] left-[-150px] w-[1200px] filter blur-[100px] opacity-25 z-[-2]"
                    />
                    <img
                        src="./blob.svg"
                        alt="Blob"
                        className="absolute w-[1200px] filter blur-[600px] opacity-25 transform -translate-y-[50%] z-[-2]"
                        style={{ top: `${pageCenter}px`, }}
                    />
                    <img
                        src="./blobBottom.svg"
                        alt="Blob"
                        className="absolute left-[-150px] w-[1200px] filter blur-[600px] opacity-25 z-[-2]"
                        style={{ top: `${pageCenter+pageCenter-80}px`, }}
                    />
                </div>
            </div>  
        </>
    );
};

export default Blobs;