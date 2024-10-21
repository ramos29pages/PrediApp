import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBell,
  faTableCellsLarge,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.scss";

const HeaderComponent = () => {

    // let userIcon = "https://avatar.iran.liara.run/public/boy";
  return (
    <nav>
      <div className="show__burguer">
      <FontAwesomeIcon icon={faTableCellsLarge} />
      </div>
      <div className="cont__logo"></div>
      <div className="user">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUserGear} />
        <div className="user-icon">
            <img src={ "https://avatar.iran.liara.run/public/boy"} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
