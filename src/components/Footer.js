const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-one">
                    <h4>О компании</h4>
                    <ul>
                        <li>Партнёрская программа</li>
                        <li>Вакансии</li>
                    </ul>
                </div>
                <div className="footer-two">
                    <h4>Меню</h4>
                    <div>
                        <ul>
                            <li>Расчёт стоимости</li>
                            <li>Услуги</li>
                            <li>Виджеты</li>
                            <li>Интеграции</li>
                            <li>Наши клиенты</li>
                        </ul>
                        <ul>
                            <li>Кейсы</li>
                            <li>Благодарственные письма</li>
                            <li>Сертификаты</li>
                            <li>Блог на Youtube</li>
                            <li>Вопрос / Ответ</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-three">
                    <h4>Контакты</h4>
                    <ul>
                        <li className="footer-number">+7 555 555-55-55</li>
                        <ul className="footer-icons">
                            <li><img src="./whatsapp.png" alt="telegram" /></li>
                            <li><img src="./viber.png" alt="telegram" /></li>
                            <li><img src="./telegram.png" alt="telegram" /></li>
                        </ul>
                        <li>Москва, Путевой проезд 3с1, к 902</li>
                    </ul>
                    <div className="footer-info">
                        <p>©WELBEX 2022. Все права защищены.</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;