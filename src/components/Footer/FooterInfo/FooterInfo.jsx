import './FooterInfo.scss'


const FooterInfo = (props) => {

  return (
    <div className="footer-info">
      <div className="footer-info__title">
        {props.title}
      </div>
      <div className="footer-info__text">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</div>
      <div className="footer-info__location">{props.location}</div>
      <div className="footer-info__phone">{props.phone}</div>
      <div className="footer-info__website">{props.website}</div>
    </div>
  )
}

export default FooterInfo;