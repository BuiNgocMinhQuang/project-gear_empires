import React from 'react';
import images from './assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// const MENU_ITEMS = [
//     {
//         icon: <FontAwesomeIcon icon={faLanguage} />,
//     },
//     {
//         icon: <FontAwesomeIcon icon={faQuestionCircle} />,
//     },
//     {
//         icon: <FontAwesomeIcon icon={faKeyboard} />,
//     },
// ];
function App() {
    return (
        <div>
            <header>
                <div className="wrapper">
                    <a href="/">
                        <img src={images} alt="Logo" className="logo" />
                    </a>
                    <ul>
                        <li>GAMING</li>
                        <li>NEWS</li>
                        <li>BUILD TOOL</li>
                        <li>SPECIAL OFFER</li>
                    </ul>
                    <div className="action">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="action-icon" />
                        <span>
                            <FontAwesomeIcon icon={faUser} className="action-icon"></FontAwesomeIcon>
                            <span className="login-text">Login</span>
                        </span>
                        <FontAwesomeIcon icon={faShoppingCart} className="action-icon" />
                    </div>
                </div>
                <div className="redline"></div>
            </header>
            <main>List product</main>
        </div>
    );
}

export default App;
