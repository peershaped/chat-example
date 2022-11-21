import {createBrowserHistory} from "history";

/**
 * The history object is provided to the router reducer, routerMiddleware, and ConnectedRouter.
 */
// only one instance of history
export const initHistory = () => createBrowserHistory();
// only one instance of history
export const history = initHistory();