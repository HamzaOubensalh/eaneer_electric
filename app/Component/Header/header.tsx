"use client";
import React, { useEffect, useState } from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { down } from '../../../Assets/Assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';


const Header: React.FC = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const [display,setDisplay]=useState(false);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const displayDiv = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;

    if (element.classList.contains("construction")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>Installation Electrique</li>
            <li>Eclairage Interieur/Exterieur</li>
            <li>Entretien et Reparation</li>
            <li>Systeme de Securite</li>
          </ul>
        </div>
      );
      setDisplay(true);
    } else if (element.classList.contains("industrial")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>Distribution d'energy</li>
            <li>Automation Indistriel</li>
            <li>Securite et Surveillance</li>
            <li>Services De Maintenance</li>
          </ul>
        </div>
      );
      setDisplay(true);
    } else if (element.classList.contains("agriculture")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>Pompage/Irrigation Automatique</li>
            <li>Automatisation Des Serres Agricoles</li>
            <li>Serres Connects</li>
            <li>Control Des Parmetrer Agricole</li>
          </ul>
        </div>
      );
      setDisplay(true);
    }else if(element.classList.contains("subscription")){
      setContent(
        <div className="services-content">
          <ul>
            <li>eaneer shield</li>
            <li>eaneer solar</li>
          </ul>
        </div>
      )
    }else {
      setDisplay(false);
      setContent(null);
    }
  };

  return (
    <div className="container-style">
      <div className="container-style2">
        <nav className="navbar navbar-expand-lg">
          <div>
            <a className="navbar-brand" href="#">Eaneer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faChevronDown} />
            </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown open" style={{position:"initial"}}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu" style={{width:"100%"}}>
                  <div className="Main-dropdown">
                      <div>
                        <a href="">About Us</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Technologies</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Contact</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Purpuse</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Sustainability</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Affiliate</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Innovation</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Strategy</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                      <div>
                        <a href="">Partners</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Enim, mollitia?</p>
                      </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{position:"initial"}}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Industry
                </a>
                <ul className="dropdown-menu" style={{width:"100%"}}>
                  <div className="Main-dropdown1" >
                      <div className="Main-dropdown-pages">
                        <div className="page">
                          <a href="">Agriculture</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Excepturi, pariatur?</p>
                        </div>
                        <div className="page">
                          <a href="">Industrial</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Excepturi, pariatur?</p>
                        </div>
                        <div className="page">
                          <a href="">Buildings</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Excepturi, pariatur?</p>
                        </div>
                        <div className="page">
                          <a href="">Green Energy</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Excepturi, pariatur?</p>
                        </div>
                      </div>
                      <div className="Main-dropdown-Mobile">
                        <p>Get Into Your Interface</p>
                        <div className="app">
                          <p>Get Your Mobile App</p>
                          <i className='bx bxs-chevron-down' style={{color:'#fff7f7'}}  ></i>
                        </div>
                        <div className="app-Button">
                          <button>Download The App</button>
                        </div>
                      </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{position:"initial"}}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" style={{width:"100%"}}>
                  <div className="Main-dropdown2">
                    <div className="dropdown-ul">
                      <ul>
                        <li className="construction" onMouseEnter={displayDiv}>Construction</li>
                        <li className="industrial" onMouseEnter={displayDiv}>Industrial</li>
                        <li className="agriculture" onMouseEnter={displayDiv}>Agriculture</li>
                        <li className="subscription" onMouseEnter={displayDiv}>Subscription</li>
                      </ul>
                    </div>
                    {display && <div className="Main-dropdown-Content">{content}</div>}
                    <div className="Main-dropdown-Mobile">
                        <p>Get Into Your Interface</p>
                        <div className="app">
                          <p>Get Your Mobile App</p>
                          <i className='bx bxs-chevron-down' style={{color:'#fff7f7'}}  ></i>
                        </div>
                        <div className="app-Button">
                          <button>Download The App</button>
                        </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="#">Carrer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="#">Finance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="Login">
            <a className="first-a" href="">Login</a>
            <a className="get-started" href="">Get Started</a>
          </div>
        </nav>
      </div>
      <hr />
    </div>

  );
}
export default Header;
