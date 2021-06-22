"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const react_router_dom_1 = require("react-router-dom");
const query_string_1 = __importDefault(require("query-string"));
const react_1 = require("react");
function useRouter() {
    const params = react_router_dom_1.useParams();
    const location = react_router_dom_1.useLocation();
    const history = react_router_dom_1.useHistory();
    const match = react_router_dom_1.useRouteMatch();
    return react_1.useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            query: Object.assign(Object.assign({}, query_string_1.default.parse(location.search)), params),
            match,
            location,
            history,
        };
    }, [params, match, location, history]);
}
exports.useRouter = useRouter;
