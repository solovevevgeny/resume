import React from 'react'

const DetailCard = ({name, flag, nativeName, population, region, capital, tld}) => {
  return (
    <section>
        <div className="container detail-card">
            <div className="detail-card__flag">
                <img src={flag} alt="" width="100%"/>
            </div>

            <div className="detail-card__info">

              <div className="info__name">
                <h1>{name}</h1>
              </div>
              <div className="info__table">
                Native Name: {nativeName}
              </div>

              <div className="info__table">
                Population: {population}
              </div>

              <div className="info__table">
                Region: {region}
              </div>

              <div className="info__table">
                Capital: {capital}
              </div>

              <div className="info__table">
                Top Level Domain: {tld}
              </div>

            </div>
        </div>

    </section>
  )
}
export default DetailCard;