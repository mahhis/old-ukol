import { useState } from 'react';
import '/src/css/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Часто задаваемые вопросы</h1>

      <div className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(0)}
        >
          1. Через сколько времени медсестра приедет на дом?
          <span className="faq-toggle">{openIndex === 0 ? 'x' : '+'}</span>
        </button>
        {openIndex === 0 && (
          <div className="faq-answer">
            <p>
              Медсестры Ukol.kz обычно приезжают в течение 30-40 минут после
              подтверждения вашего заказа. Точное время зависит от загруженности и расстояния до вашего адреса.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(1)}
        >
          2. Какие состояния требуют капельницы или уколов, которые вы предлагаете?
          <span className="faq-toggle">{openIndex === 1 ? 'x' : '+'}</span>
        </button>
        {openIndex === 1 && (
          <div className="faq-answer">
            <p>
              Мы оказываем помощь в случаях обезвоживания, необходимости
              восстановления после интоксикации, витаминной поддержки, а также
              при медицинских назначениях для лечения заболеваний. Все процедуры выполняются строго по показаниям.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(2)}
        >
          3. Гарантируете ли вы конфиденциальность при предоставлении услуг?
          <span className="faq-toggle">{openIndex === 2 ? 'x' : '+'}</span>
        </button>
        {openIndex === 2 && (
          <div className="faq-answer">
            <p>
              Да, мы строго соблюдаем принципы конфиденциальности. Вся информация
              о ваших обращениях и состоянии здоровья остаётся закрытой и защищённой.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(3)}
        >
          4. Как происходит расчет стоимости услуг?
          <span className="faq-toggle">{openIndex === 3 ? 'x' : '+'}</span>
        </button>
        {openIndex === 3 && (
          <div className="faq-answer">
            <p>
              Стоимость рассчитывается автоматически с учётом вашего местоположения,
              времени заказа и выбранной услуги. Мы стараемся предоставлять лучшие цены!
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <button
          className="faq-question"
          onClick={() => toggleAccordion(4)}
        >
          5. Кто выполняет процедуры?
          <span className="faq-toggle">{openIndex === 4 ? 'x' : '+'}</span>
        </button>
        {openIndex === 4 && (
          <div className="faq-answer">
            <p>
              Все процедуры выполняются только сертифицированными медсестрами с
              соответствующей квалификацией. После оказания услуги вы сможете
              оставить отзыв и оценку для медработника.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
