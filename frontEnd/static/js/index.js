import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js"
import postView from './views/postView.js';
import Todo from './views/Todo.js';
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) =>{
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result=>result[1]));
    return Object.fromEntries(keys.map((key, i)=>{
        return [key, values[i]];
    }));
}


const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router =  async() => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
        { path: "/posts/:id", view: postView},
        { path: "/todo", view: Todo}
    ];
    //test each route for matchs;
    const Matches = routes.map((route)=>{
        return {
            route: route, 
            result: location.pathname.match(pathToRegex(route.path))
        }
    })
    let match = Matches.find(route => route.result) || {route: routes[0], result: [location.pathname]};

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();



}
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})