import React from 'react';
import './App.css';

import bannerImg from './IMG/banner.avif';
import feature1Img from './IMG/feature1.png';
import feature2Img from './IMG/feature2.png';
import feature3Img from './IMG/feature.png';

const bannerTitle = "Ford Territory";
const bannerSubtitle = "Redefiniendo el confort y la tecnología.";
const feature1Title = "Diseño Exterior Moderno";
const feature1Description = "El nuevo Ford Territory cuenta con un diseño aerodinámico y elegante.";
const feature2Title = "Tecnología de Conectividad";
const feature2Description = "Pantalla táctil de alta resolución con conectividad avanzada.";
const feature3Title = "Seguridad de Vanguardia";
const feature3Description = "Sistema de asistencia al conductor para una experiencia segura.";

function App() {
  return (
    <div className="App">
      <section className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="banner-content">
          <h1>{bannerTitle}</h1>
          <p className="banner-subtitle">{bannerSubtitle}</p> { }
          <button className="banner-button">Descubre Más</button>
        </div>
      </section>

      <section className="features">
        <h2>Características Destacadas</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={feature1Img} alt={`imagen-${feature1Title}`} className="feature-image" />
            <h3>{feature1Title}</h3>
            <p>{feature1Description}</p>
          </div>

          <div className="feature-card">
            <img src={feature2Img} alt={`imagen-${feature2Title}`} className="feature-image" />
            <h3>{feature2Title}</h3>
            <p>{feature2Description}</p>
          </div>

          <div className="feature-card">
            <img src={feature3Img} alt={`imagen-${feature3Title}`} className="feature-image" />
            <h3>{feature3Title}</h3>
            <p>{feature3Description}</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Experimenta el Ford Territory Hoy</h2>
        <button className="cta-button">Cotiza Ahora</button>
      </section>
    </div>
  );
}
export default App;
