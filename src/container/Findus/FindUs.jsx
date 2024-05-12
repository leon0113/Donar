import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding pt-28" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Tenderinlenkki 6B LTK3, 00520 Helsinki, Finland</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Contact</p>
        <p className="p__opensans">Phone: 041 5731795</p>
        <p className="p__opensans p__email">Email: donarHouse@gmail.com</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Thu: 11:00 am - 10:00 pm</p>
        <p className="p__opensans">Fri : 11:00 am - 02:00 am</p>
        <p className="p__opensans">Sat : 11:30 am - 02:00 am</p>
        <p className="p__opensans">Sun : 11:30 am - 10:00 pm</p>
      </div>
      <button type="button" className="custom__button text-black bg-yellow-300 hover:bg-red-500  font-bold py-2 px-4  transition duration-300 ease-in-out" style={{ marginTop: '2rem' }}>Call Us</button>
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.map} alt="finus_img" /> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.8792166979267!2d24.92660787740182!3d60.19928174108377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209c8cdc9678d%3A0xd4c78d51916aa7f8!2sD%C3%B6ner%20House!5e0!3m2!1sen!2sbd!4v1714435661438!5m2!1sen!2sbd" style={{ width: '600px', height: "450px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
);

export default FindUs;
