import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Shop from '../Shop';

import {MobileWrapper} from './index.style';

const BaseContainer: React.FC = () => (
  <>
    <MobileWrapper className="mobilewrapper">
      <Router>
        <Switch>
          <Route
            exact
            path="/shop/:id"
            component={(props: any) => <Shop {...props} />}
          />

          <Route path="*" component={() => <>Not Found</>} />
        </Switch>
      </Router>
    </MobileWrapper>
  </>
);
export default BaseContainer;
