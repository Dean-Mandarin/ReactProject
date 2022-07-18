import React, {useState} from 'react';

// utils
import axios from 'axios';

//styles
import './style.css';
import './media.css';

const Registration = () => {
  const [state, setState] = useState({
    name: '',
    phoneNumber: '',
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const fetchAddUserAction = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/api/user';
    await axios.post(url, { ...state }).then((res) => {
      console.log(res);
    });
    setState({ name: '', phoneNumber: '' });
  };

  return (
    <section className="registration" id="registration">
      <div className="formBlock anim-items">
        <div className="wannaWatch">
          <span>Хотите посмотреть?</span>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
            на латинице с начала XVI века. В то время некий безымянный
            печатник создал большую коллекцию размеров и форм шрифтов,
            используя Lorem Ipsum для распечатки образцов.
          </p>
        </div>

        <div className="input">
          <form id="form">
            <div id="formRaw1">
              <input
                id="nameInput"
                type="text"
                value={state.name}
                name="name"
                onChange={onChangeInput}
                placeholder="Ваше имя"
              />
              <input
                id="phoneInput"
                type="text"
                value={state.phoneNumber}
                name="phoneNumber"
                onChange={onChangeInput}
                placeholder="Ваш телефон"
              />
            </div>

            <div id="formRaw2">
              <p>
                <small>
                  *Мы никому не передаем ваши данные.
                  И не сохраняем ваш номер в базу.
                </small>
              </p>

              <button
                type="button"
                id="button"
                onClick={fetchAddUserAction}
              >
                Посмотреть район
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;