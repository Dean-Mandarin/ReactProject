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
    <footer className="footer" id="footer">
      <div id="footerLogoBlock">
        <p className="houseVOP">HouseVOP</p>
        <p className="logoBottom">ЖИЛОЙ КОМПЛЕКС</p>
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
            <li>
              <small>
                Адрес:
                <a href="#place">Наб. реки Фонтанки 10-15</a>
              </small>

            </li>
            <li>
              <small>
                Телефон:
                <a href="#">8 (812) 123-45-67</a>
              </small>
            </li>
            <li>
             <small>Отдел продаж: 10:00 - 20:00</small>
            </li>
            <li>
              <small>
                E-mail:
                <a href="mailto: abc@example.com"><b>vip@housevip.ru</b></a>
              </small>
            </li>
            <li>
              <img src={youtubeIcon}/>
              <img src={vkIcon}/>
              <img src={facebookIcon}/>
              <img src={instagramIcon}/>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}

export default Footer;