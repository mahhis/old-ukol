import '/src/css/OurService.css';

export default function OurService() {
  const toggleAccordion = (index) => {
    const item = document.getElementById(`os-item-${index}`);
    const answer = item.querySelector('.os-answer');
    const toggleButton = item.querySelector('.os-toggle');
    
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      toggleButton.textContent = '+';
    } else {
      answer.style.display = 'block';
      toggleButton.textContent = 'x';
    }
  };

  return (
    <div className="os-container">
      <div id="os-item-0" className="os-item">
        <button
          className="os-question"
          onClick={() => toggleAccordion(0)}
        >
           Уколы на дому
          <span className="os-toggle">+</span>
        </button>
        <div className="os-answer" style={{ display: 'none' }}>
          <p>
            Удобные и безопасные инъекции прямо у вас дома.
          </p>
        </div>
      </div>

      <div id="os-item-1" className="os-item">
        <button
          className="os-question"
          onClick={() => toggleAccordion(1)}
        >
          2. Какие состояния требуют капельницы или уколов, которые вы предлагаете?
          <span className="os-toggle">+</span>
        </button>
        <div className="os-answer" style={{ display: 'none' }}>
          <p>
            Мы оказываем помощь в случаях обезвоживания, необходимости
            восстановления после интоксикации, витаминной поддержки, а также
            при медицинских назначениях для лечения заболеваний. Все процедуры выполняются строго по показаниям.
          </p>
        </div>
      </div>

      <div id="os-item-2" className="os-item">
        <button
          className="os-question"
          onClick={() => toggleAccordion(2)}
        >
          3. Гарантируете ли вы конфиденциальность при предоставлении услуг?
          <span className="os-toggle">+</span>
        </button>
        <div className="os-answer" style={{ display: 'none' }}>
          <p>
            Да, мы строго соблюдаем принципы конфиденциальности. Вся информация
            о ваших обращениях и состоянии здоровья остаётся закрытой и защищённой.
          </p>
        </div>
      </div>

      <div id="os-item-3" className="os-item">
        <button
          className="os-question"
          onClick={() => toggleAccordion(3)}
        >
          4. Как происходит расчет стоимости услуг?
          <span className="os-toggle">+</span>
        </button>
        <div className="os-answer" style={{ display: 'none' }}>
          <p>
            Стоимость рассчитывается автоматически с учётом вашего местоположения,
            времени заказа и выбранной услуги. Мы стараемся предоставлять лучшие цены!
          </p>
        </div>
      </div>

      <div id="os-item-4" className="os-item">
        <button
          className="os-question"
          onClick={() => toggleAccordion(4)}
        >
          5. Кто выполняет процедуры?
          <span className="os-toggle">+</span>
        </button>
        <div className="os-answer" style={{ display: 'none' }}>
          <p>
            Все процедуры выполняются только сертифицированными медсестрами с
            соответствующей квалификацией. После оказания услуги вы сможете
            оставить отзыв и оценку для медработника.
          </p>
        </div>
      </div>
    </div>
  );
}
