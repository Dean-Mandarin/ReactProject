import React from 'react';

//styles
import './style.css';
import './media.css';

const Registration = () => {
  return (
    <section className="registration anim-items">
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
        <form>
          <div id="formRaw1">
            <input type="text" placeholder="Ваше имя" id="nameInput"/><br/><br/>
            <input type="text" placeholder="Ваш телефон" id="phoneInput"/><br/>
          </div>

          <div id="formRaw2">

            <small>*Мы никому не передаем ваши данные.<br/>
              И не сохраняем ваш номер в базу.</small><br/>


            <input type="submit" id="button" value="Посмотреть район"/>

          </div>

        </form>
      </div>

    </section>
  );
};

export default Registration;