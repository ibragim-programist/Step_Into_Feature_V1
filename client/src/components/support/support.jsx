import './support.css';

function Support() {
  return (
    <div className='sup'>
      <h1>Поддержка</h1>
      <h2>
        Для получения поддержки в различных обстоятельствах обращайтесь по следующему email
      </h2>
      <br />
      <a
        className='link-to-email'
        href="https://e.mail.ru/compose/?to=ibragim.rabadanov.09@mail.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        ibragim.rabadanov.09@mail.ru
      </a>
    </div>
  );
}

export default Support;