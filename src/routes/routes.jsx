import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Catalog from "../pages/catalog/Catalog";
import Contacts from "../pages/contacts/Contacts";
import News from "../pages/news/News";
import NewsItem from "../pages/newsItem/NewsItem";
import Registration from "../pages/registration/Registration";
import Page404 from "../pages/page404/Page404";

export const publicRoutes =[
    {path: '/', element: <Main/>},
    {path: 'login', element: <Login/>},
    {path: 'registration', element: <Registration/>},
    {path: 'catalog', element: <Catalog/>},
    {path: 'contacts', element: <Contacts/>},
    {path: 'news', element: <News/>},
    {path: 'news/:id', element: <NewsItem/>},
    {path: '404', element: <Page404/>},
]
