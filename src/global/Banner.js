//Components

//Media
import USM from '../img/USM.png';
import LazyHero from 'react-lazy-hero';
import '../static/texto.css';

import {HiOutlineLocationMarker} from 'react-icons/hi';
function Banner() {
  return (
    <>
      <LazyHero imageSrc={USM} color="#161616">
                <h1>Feria de Software 2020</h1>
                 <h2><HiOutlineLocationMarker/>    Avda. España 1680, Valparaíso</h2>
      </LazyHero>
		 
		</>
  );
}

export default Banner;