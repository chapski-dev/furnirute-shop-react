import "./Section2Item.scss"





export const Section2Item = (props) => {
  return (
    <div className="section2-item">
          <div className="section2-item__img">
            <i className={`icon-${props.iconName}`}></i>
          </div>
          <div className="section2-item-info">
            <div className="section2-item__title">{props.title}</div>
            <div className="section2-item__discr">{props.text}</div>
          </div>
        </div>
  )
}

export default Section2Item;

// {props.item.title}
// {props.text}
// {props.iconName}