import './Profile.css';
import { useEffect, useState } from 'react';
import { changeUserData } from './helper';

const serverUrl = 'http://localhost:7523';

function Profile({ user }) {
  const [userNameValue, setUserNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    setEmail(user.email ?? '');
    setUserName(user.name ?? '');
  }, [])

  useEffect(() => {
    if (user) {
      setUserNameValue(user.name || '');
      setEmailValue(user.email || '');
    }
  }, [user]);



  const handleChangeEmailValue = (e) => {
    setEmailValue(e.target.value);
  };

  const handleChangeUserNameValue = (e) => {
    setUserNameValue(e.target.value);
  };

  const handleSubmitChanges = async (e) => {
    e.preventDefault();

    const res = await changeUserData({
      username: userNameValue || user?.name,
      email: emailValue || user?.email,
    });

    if(res != false) {
      setUserName(res.username);
      setEmail(res.email);
      setEmailValue('');
      setUserName('');

      alert('Данные успешно обновлены!');
    } else {
      alert('Ошибка, данные не были обновлены')
    }
  };


  return (
    <div className="profile-container">
      <h2>Профиль пользователя</h2>
      <div className="profile-info">
        <p><strong>Никнейм:</strong> {userName || '—'}</p>
        <p><strong>Email:</strong> {email || '—'}</p>
      </div>

      <form onSubmit={handleSubmitChanges} className="changeForm">
        <div className="form-group">
          <label htmlFor="email">Новый email</label>
          <input
            id="email"
            type="email"
            placeholder="example@mail.ru"
            value={emailValue}
            onChange={handleChangeEmailValue}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Новый никнейм</label>
          <input
            id="username"
            type="text"
            placeholder="Ваш никнейм"
            value={userNameValue}
            onChange={handleChangeUserNameValue}
            minLength={3}
            maxLength={20}
          />
        </div>

        <button type="submit" className="submit-btn">
          Сохранить изменения
        </button>
      </form>
    </div>
  );
}

export default Profile;