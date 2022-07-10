import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Catalog from "../pages/catalog/Catalog";
import Contacts from "../pages/contacts/Contacts";
import News from "../pages/news/News";
import NewIdPage from "../pages/newsItem/NewIdPage";
import Registration from "../pages/registration/Registration";
import Page404 from "../pages/page404/Page404";

export const publicRoutes =[
    {path: '/', element: <Main/>},
    {path: 'login', element: <Login/>},
    {path: 'registration', element: <Registration/>},
    {path: 'catalog', element: <Catalog/>},
    {path: 'catalog/:type', element: <Catalog/>},
    {path: 'contacts', element: <Contacts/>},
    {path: 'news', element: <News/>},
    {path: 'news/:id', element: <NewIdPage/>},
    {path: '*', element: <Page404/>},
]

export const privateRoutes =[
    {path: '/', element: <Main/>},
    {path: 'catalog', element: <Catalog/>},
    {path: 'catalog/:type', element: <Catalog/>},
    {path: 'contacts', element: <Contacts/>},
    {path: 'news', element: <News/>},
    {path: 'news/:id', element: <NewIdPage/>},
    {path: '*', element: <Page404/>},
]


