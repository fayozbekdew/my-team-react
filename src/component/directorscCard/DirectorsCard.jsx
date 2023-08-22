import './DirectorsCard.css'

const DirectorsCard = ( { data } ) => {
    console.log(data);
  return (
    <>
    {data.map((card) => {
        return(
            <li key={card.id} className="directors__item">
            <div className="directors__item__member">
              <img src={card.img} alt="" className="directors__item__member_user__img" width="96" height="96"/>
              <h5 className="directors__item__member__user__name">
                {card.title}
              </h5>
              <p className="directors__item__member__user__direction">
                {card.exsperiense}
              </p>
              <img src={card.plusImg} alt="" className="directors__item__member__img" width="56" height="56"/>
            </div>
          </li>
        )
    })}
    </>
  )
}

export default DirectorsCard