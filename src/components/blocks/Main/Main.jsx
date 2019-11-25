import React from 'react';
import { Paper } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import CurrentCity from '../../pages/CurrentCity/CurrentCity';
import CityItem from '../../reusable/CityItem/CityItem';
import { mainContent, mainWrapper, cityItemWrapper } from './Main.scss';

const Main = (props) => {
    const { cityWeather } = props.cityData;

    return (
        <main className={ mainWrapper }>
            <Switch>
                <Route exact path="/">
                    <Paper className={ mainContent }>
                        <CurrentCity cityData={ cityWeather.currentCity }/>
                    </Paper>
                </Route>
                <Route exact path="/cities">
                    { cityWeather.allCities.map(city => (
                            <Paper key={city.id} className={ cityItemWrapper }>
                                <CityItem cityData={ city } />
                            </Paper>
                        )) 
                    }
                </Route>
            </Switch>
        </main>
    );
}

export default Main;