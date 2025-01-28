import React from "react";

const FooterLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow"></div>
      <footer className="w-full relative z-10">
        <img src="/footer.svg" alt="Footer" className="w-full" />
      </footer>
    </div>
  );
};

export default FooterLayout;