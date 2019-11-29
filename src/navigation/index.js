import React, { Component, Fragment } from 'react';
import AuthRoute from './AuthRoutes/index';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <AuthRoute />
            </Fragment>
         );
    }
}
 
export default App;