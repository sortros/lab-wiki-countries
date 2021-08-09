import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import countriesJSON from './countries.json'


class App extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    this.setState({
      countries: countriesJSON
    })
  }


  render() {
    const { countries } = this.state;

    return (
      <div className="App">
        <Navbar />
  
        <div className="container flex mx-auto my-8 ">
          <CountriesList countriesList={countries}/>
          <Switch>
            <Route exact path="/:cca3"  
              render={ (routerProps) => 
              <CountryDetails {...routerProps} countriesList={countries} />
              } 
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;