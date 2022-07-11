import React, {useMemo} from 'react';

//styles
import './style.css';
import './media.css';

//list
import {FooterList} from "./data";

//svg
import youtubeIcon from '../../assets/svg_icons/youtube.svg'        //youtube
import vkIcon from '../../assets/svg_icons/vk.svg'                  //vk
import facebookIcon from '../../assets/svg_icons/facebook.svg'      //facebook
import instagramIcon from '../../assets/svg_icons/insta.svg'        //instagram


function Footer() {
  const renderList = useMemo(() => {
    return FooterList.map(({title, link}) => {
      return (
        <li key={title}>
          <a href={link}>{title}</a>
        </li>
      )
    })
  }, []);

  return (
    <section className="footer" id={"footer"}>


      <div id="footerLogoBlock">
        <a href="#" className="houseVOP">HouseVOP</a><br/>
        <a href="#" className="logoBottom">ЖИЛОЙ КОМПЛЕКС</a>
      </div>

      <div id="footerMenus">
        <div className="footerMenu" id="footerMenu1">
          <ul>
            {renderList}
          </ul>
        </div>

        <div className="footerMenu" id="footerMenu2">
          <ul>
            {renderList}
          </ul>
        </div>

        <div className="footerMenu" id="footerMenu3">
          <ul>
            <li>Адрес: <a href="#map">Наб. реки Фонтанки 10-15</a></li>
            <li>Телефон: <a href="#">8 (812) 123-45-67</a></li>
            <li>Отдел продаж: 10:00 - 20:00</li>
            <li>E-mail: <b><a href="mailto: abc@example.com">vip@housevip.ru</a></b></li>
            <li>
              <img src={youtubeIcon} />
              <img src={vkIcon} />
              <img src={facebookIcon} />
              <img src={instagramIcon} />
            </li>
          </ul>

        </div>
      </div>


    </section>
  );
}

export default Footer;