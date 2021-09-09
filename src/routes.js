import home from "./components/home";

import me from './components/me'
import index from './components/indexPost'
const routes = [
  
  {
    path: "/home",
    component: home,
    routes: [
      {
        path: "/home/index",
        component: index,
      },
      {
        path: "/home/me",
        component: me,
      },
    ],
  },
 
];

export default routes;
