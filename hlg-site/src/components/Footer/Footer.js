import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  const contributors = [
    {
      name: "Jamie Toman",
      github: "https://github.com/Jamie897",
    },
    {
      name: "Mariah Seggebruch",
      github: "https://github.com/MariahSeggebruch",
    },
    {
      name: "Kaylene Kilbourn",
      github: "https://github.com/KayKilb",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="left">
          © 2023 Galactic Market Inc.
        </div>
        <div className="right">
          {contributors.map((contributor, index) => (
            <a key={index} href={contributor.github} target="_blank" rel="noopener noreferrer">
              <img className="circle responsive-img" src={contributor.image} alt={contributor.name} style={{ marginLeft: '10px' }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
