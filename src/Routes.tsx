import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <h1>Home</h1>
            </Route>
            <Route path="/search">
                <h1>Search</h1>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;