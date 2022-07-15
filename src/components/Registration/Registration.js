import React, {useState} from 'react';
import axios from 'axios';
//styles
import './style.css';
import './media.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const fetchAddUserAction = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/api/user';
    await axios.post(url, { name, phoneNumber: phone }).then(res => {
      console.log(res)
    })
  }


  return (
    <section className="registration" id="registration">
      <div className="formBlock anim-items">
        <div className="wannaWatch">
          <span>Хотите посмотреть?</span><br/>
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
              <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Ваше имя" id="nameInput"/><br/><br/>
              <input type="text" onChange={(e) => { setPhone(e.target.value) }} placeholder="Ваш телефон" id="phoneInput"/><br/>
            </div>

            <div id="formRaw2">

              <small>*Мы никому не передаем ваши данные.<br/>
                И не сохраняем ваш номер в базу.</small><br/>


              <input
                type="submit"
                id="button"
                onClick={(e) => { fetchAddUserAction(e)}}
                value="Посмотреть район"
              />

            </div>

          </form>
        </div>
      </div>

    </section>
  );
};

export default Registration;