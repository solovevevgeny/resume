
import React from 'react'

import DetailCard from './DetailCard';

const Detail = (data) => {
  const country = data.data;
   

  return (
    <div>
        <DetailCard
            name={country.name.common}
            nativeName={country.name.nativeName.common}
            population={country.population}
            flag={country.flags.png}
            region={country.region}
            capital={country.capital}
            tld={country.tld}
         />
    </div>
  )
}

export default Detail;