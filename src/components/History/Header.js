import '../../App.css';
import * as React from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {

  const { state } = React.useContext(AppContext);

  const { sharing } = state

  const links = [
    'https://kabakoo.app/vocal-coaching-1231',
    'https://kabakoo.app/vocal-coaching-1232',
  ];

  const shareText = `Prêtez une oreille à ces vocaux de coaching:\n${links.join('\n')}`;

  const shareData = {
    title: 'Partagez les liens',
    text: shareText,
  };

  const onPress = () => {
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Partagé avec succès'))
        .catch((error) => console.error('Erreur lors du partage:', error));
    } else {
      console.log(`La fonctionnalité de partage web n'est pas prise en charge avec votre navigateur.`);
    }
  };

  return(
    <header className="header position-fixed p-4 w-100">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to="/">
            <i className="bi bi-chevron-left" style={{fontSize: "1.5rem", color: "#513F59"}}></i>
          </Link>
          <div className="icon-profil">
            <p className="p-0 m-0 text-white">JW</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span
            className={sharing ? "d-block" : "d-none"}
            style={{ cursor: 'pointer' }}
            onClick={onPress}>
            <i className="bi bi-share-fill" style={{fontSize: "1.5rem", color: "#513F59"}}></i>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
