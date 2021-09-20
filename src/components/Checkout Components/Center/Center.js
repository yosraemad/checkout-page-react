import PaypalImage from "../../../assets/images/paypal-logo-preview.png";
import visaImage from "../../../assets/images/Visa_2014_logo_detail.svg.png";
import MasterCardImage from "../../../assets/images/1200px-Mastercard-logo.svg.png";
import MaestroImage from "../../../assets/images/1200px-Maestro_2016.svg.png";
import DiscoverImage from "../../../assets/images/1280px-Discover_Card_logo.svg.png";
import iDealImage from "../../../assets/images/ideal-logo-png-transparent.png";
import inPostImage from "../../../assets/images/image0.png";
import dpdImage from "../../../assets/images/DPD_logo(red)2015.png";
import dhlImage from "../../../assets/images/Path 141.png";
import FedEx from "../../../assets/images/DPD_logo(red)2015.jpg";

import styles from "./Center.module.css";

const Center = () => {
  return (
    <div className={styles.container}>
      <label>Payment method</label>
      <div className={styles.payment}>
        <div>
          <img alt="paypal" src={PaypalImage} />
        </div>
        <div>
          <img alt="visa" src={visaImage} />
        </div>
        <div>
          <img alt="mastercard" src={MasterCardImage} />
        </div>
        <div>
          <img alt="maestro" src={MaestroImage} />
        </div>
        <div>
          <img alt="discover" src={DiscoverImage} />
        </div>
        <div>
          <img alt="ideal" src={iDealImage} />
        </div>
      </div>
      <div className={styles["delivery-label"]}>
        <label>Delivery method</label>
      </div>
      <div className={styles.delivery}>
        <div>
          <img alt="in post" src={inPostImage} />
          <p>$20.00</p>
        </div>
        <div>
          <img alt="dpd" src={dpdImage} />
          <p>$12.00</p>
        </div>
        <div>
          <img alt="dhl" src={dhlImage} />
          <p>$15.00</p>
        </div>
        <div>
          <img alt="dhl" src={FedEx} />
          <p>$10.00</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
