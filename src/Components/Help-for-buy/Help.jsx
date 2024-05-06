import React from "react";
import "./help.scss";
import "./help.css"
import like from "../../assets/8134642_like_thumb_thumbs_up_vote_icon 1.svg";
import money from "../../assets/9042862_money_square_icon 1.svg";
import document from "../../assets/2849788_folder_document_multimedia_icon (2) 1.svg";
import security from "../../assets/3994405_antivirus_insurance_protection_security_shield_icon 1.svg";
import vector from "../../assets/Vector 25.svg"
import picture from "../../assets/7787505_camera_photography_photo_picture_image_icon 1.svg"
import search from "../..//assets/8666693_search_icon 1.svg"
import tax from "../../assets/9081376_receipt_tax_icon 1.svg"
import ruble from "../../assets/1608820_ruble_icon 1.svg"
import audi from "../../assets/333333 Audi-S5-Sportback-TDI-Restyling-2019-3840x2160-006 1 (1).png"
import mask from "../../assets/Mask group (1).png"

function Help() {
  return (
    <div className="help-container">
      <div className="image-container">
        <h1>Помощь на всех этапах покупки </h1>
        <p>
          Оставьте заявку и наш менеджер <br /> перезвонит вам через 15 минут
        </p>
        <input type="number" placeholder="+7(___)___ __  __" />
        <div>
        <button>Получить консультацию</button>
        <img className="vector" src={vector} alt="" />
        </div>
        <div>
            <img className="audi" src={audi} alt="" />
            <img className="mask" src={mask} alt="" />
        </div>
      </div>
      <div className="texts-container">
        <div className="icons">
          <section>
            <div className="icons-border">
              <img src={like} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
          <section>
            <div className="icons-border">
              <img src={money} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
          <section>
            <div className="icons-border">
              <img src={document} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
          <section>
            <div className="icons-border">
              <img src={security} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
        </div>
        <div className="icons">
          <section>
            <div className="icons-border">
              <img src={picture} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
          <section>
            <div className="icons-border">
              <img src={search} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
          <section>
            <div className="icons-border">
              <img src={tax} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
          <section>
            <div className="icons-border">
              <img src={ruble} alt="" />
            </div>
            <p>Поберем лучший вариант авто по наилучшей стоимости</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Help;
