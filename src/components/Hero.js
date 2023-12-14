const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="simple-desc">
                    <h1>Зарабатывайте больше <br /> <span>c WELBEX</span></h1>
                    <p>Развиваем и контролируем продажи за вас</p>
                </div>
                <div className="services">
                    <div className="services-header">
                        <h2>Вместе c <span>бесплатной <br /> консультацией</span> мы дарим:</h2>
                        <ul>
                            <li>
                                <h4>Виджеты</h4>
                                <p>30 готовых решений</p>
                            </li>
                            <li>
                                <h4>Dashboard</h4>
                                <p>c показателями вашего бизнеса</p>
                            </li>
                            <li>
                                <h4>Skype Аудит</h4>
                                <p>отдела продаж и CRM системы</p>
                            </li>
                            <li>
                                <h4>35 дней</h4>
                                <p>использования CRM</p>
                            </li>
                        </ul>
                        <ul className="for-phone">
                            <li> Skype аудит</li>
                            <li> 30 виджетов</li>
                            <li> Dashboard</li>
                            <li> Месяц аmoCRM</li>
                        </ul>
                    </div>
                    <button>Получить консультацию</button>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;