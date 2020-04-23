import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TagManager from 'react-gtm-module'
import Shop from '../Shop';

import { MobileWrapper } from './index.style';


const tagManagerArgs = {
  gtmId: 'GTM-NHF5B3P',

}

TagManager.initialize(tagManagerArgs)

const BaseContainer: React.FC = () => (
  <>
    <MobileWrapper className="mobilewrapper">
      <Router>
        <Switch>
          <Route
            exact
            path="/shop/:id/:isZawgyi"
            component={(props: any) => <Shop {...props} />}
          />

          <Route path="*" component={() => <>Not Found</>} />
        </Switch>
      </Router>
    </MobileWrapper>
  </>
);
export default BaseContainer;
