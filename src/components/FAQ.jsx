import '/src/css/FAQ.css';

export default function FAQ() {
  // Function to toggle the FAQ items without React state
  const toggleAccordion = (index) => {
    const item = document.getElementById(`faq-item-${index}`);
    const answer = item.querySelector('.faq-answer');
    const toggleButton = item.querySelector('.faq-toggle');
    
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      toggleButton.textContent = '+';
    } else {
      answer.style.display = 'block';
      toggleButton.textContent = 'x';
    }
  };

  return (
    <div className="faq-container">
      <h1>Часто задаваемые вопросы</h1>

      <div id="faq-item-0" className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(0)}
        >
          1. Через сколько времени медсестра приедет на дом?
          <span className="faq-toggle">+</span>
        </button>
        <div className="faq-answer" style={{ display: 'none' }}>
          <p>
            Медсестры Ukol.kz обычно приезжают в течение 30-40 минут после
            подтверждения вашего заказа. Точное время зависит от загруженности и расстояния до вашего адреса.
          </p>
        </div>
      </div>

      <div id="faq-item-1" className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(1)}
        >
          2. Какие состояния требуют капельницы или уколов, которые вы предлагаете?
          <span className="faq-toggle">+</span>
        </button>
        <div className="faq-answer" style={{ display: 'none' }}>
          <p>
            Мы оказываем помощь в случаях обезвоживания, необходимости
            восстановления после интоксикации, витаминной поддержки, а также
            при медицинских назначениях для лечения заболеваний. Все процедуры выполняются строго по показаниям.
          </p>
        </div>
      </div>

      <div id="faq-item-2" className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(2)}
        >
          3. Гарантируете ли вы конфиденциальность при предоставлении услуг?
          <span className="faq-toggle">+</span>
        </button>
        <div className="faq-answer" style={{ display: 'none' }}>
          <p>
            Да, мы строго соблюдаем принципы конфиденциальности. Вся информация
            о ваших обращениях и состоянии здоровья остаётся закрытой и защищённой.
          </p>
        </div>
      </div>

      <div id="faq-item-3" className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(3)}
        >
          4. Как происходит расчет стоимости услуг?
          <span className="faq-toggle">+</span>
        </button>
        <div className="faq-answer" style={{ display: 'none' }}>
          <p>
            Стоимость рассчитывается автоматически с учётом вашего местоположения,
            времени заказа и выбранной услуги. Мы стараемся предоставлять лучшие цены!
          </p>
        </div>
      </div>

      <div id="faq-item-4" className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(4)}
        >
          5. Кто выполняет процедуры?
          <span className="faq-toggle">+</span>
        </button>
        <div className="faq-answer" style={{ display: 'none' }}>
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
