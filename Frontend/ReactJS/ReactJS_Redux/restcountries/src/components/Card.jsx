import React from 'react'

export const Card = ({name, population, region, capital, flag, onclick}) => {
  return (
    <div className="card shadow" onClick={()=>onclick(name)}>
        <div className="card__image">
            <img src={flag} width="100%" alt="" />
        </div>
        <div className="card__body">
            <div className="card__body-name">
                {name}
            </div>
            <div className="card__body-description">
                <strong>Population:</strong> {population} <br />
                <strong>Region:</strong> {region} <br />
                <strong>Capital:</strong> {capital} <br />
            </div>

        </div>
    </div>
  )
}
