import React from 'react';
import { IconContext } from "react-icons";
import {
    FaMobileAlt,
    FaMapMarkerAlt,
    FaInstagram
} from 'react-icons/fa';

import '../scss/_home.scss';

const FooterContainer = () => {
    var phoneNumber = [
        '+38 (098) 998 8957',
        '+38 (063) 708 4043',
    ];

    var address = ['Большая Морская, 70, Николаев, Николаевская область, 54000'];

    const getNumbers = phoneNumber.map((number, i) => <li key={i}><a href={`tel:${{ number }}`}>{number}</a></li>);
    const getAddress = address.map((address, i) => <p key={i}>{address}</p>);

    return (
        <div className="footer-container">
            <div className="wrapper-footer-container">
                <div className="display-maps-container">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjq8aJKgtpjP-F0o3jONRjFf4wOuZIwfc&q=Турагентство+Киви+Тревел+(Kiwi+travel+), Mykolaiv&language=uk&region=UA&center=46.972690,31.990087&zoom=17"
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                </div>
                <div className="container-contacts">
                    <div className="address">
                        <h4>
                            <IconContext.Provider value={{ size: "1em" }}>
                                <FaMapMarkerAlt />
                            </IconContext.Provider>
                        Адрес
                        </h4>
                        {getAddress}
                    </div>
                    <div className="contact">
                        <h4>
                            <IconContext.Provider value={{ size: "1em" }}>
                                <FaMobileAlt />
                            </IconContext.Provider>
                            Контакты
                             </h4>
                        <ul>{getNumbers}</ul>
                    </div>
                </div>
                <div className="social-networks">
                    <h4>Мы в социальных сетях</h4>
                    <div className="instagram">
                        <a href="https://www.instagram.com/kiwitravel_mk/">
                            <IconContext.Provider value={{ size: "1em" }}>
                                <FaInstagram />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FooterContainer;
