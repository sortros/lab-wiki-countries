import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CountriesList extends Component {
    render() {
      const { countriesList } = this.props;

        return (
         <div>
            <h2  className="text-left font-black text-xl mb-4">Countries List:</h2>
            {countriesList.map((country, index) => {
              return (
                <div key={index} className="container border mb-4 py-4 ml-4">
                  <Link to={`/${country.cca3}`} key={country.cca3}>
                    <span role='img'>{country.flag}</span>
                    {country.name.common}
                  </Link>
                </div>
              )
            })}
         </div>
        )
    }
}

export default CountriesList