import "./comp-style.css"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="nav-logo">
                    <div className="image">
                        <img src="./vector.png" />
                        <img src="./vector (1).png" />
                    </div>
                    <p className="text">
                        крупный интегратор CRM в Poccии и ещё 8 странах
                    </p>
                </div>
                <div className="nav-setting">
                    <ul>
                        <li>Услуги</li>
                        <li>Виджеты</li>
                        <li>Интеграции</li>
                        <li>Кейсы</li>
                        <li>Сертификаты</li>
                    </ul>
                </div>
                <div className="nav-contacts">
                    <p>+7 555 555-55-55</p>
                    <ul>
                        <li><img src="./telegram.png" alt="telegram" /></li>
                        <li><img src="./viber.png" alt="telegram" /></li>
                        <li><img src="./whatsapp.png" alt="telegram" /></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;