import React from "react";

const FooterLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen z-10">
      <div className="flex-grow"></div>

      <footer className="w-full">
        <img src="/footer.svg" alt="Footer" className="w-full" />
      </footer>
    </div>
  );
};

export default FooterLayout;
