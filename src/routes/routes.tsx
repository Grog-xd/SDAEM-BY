import Main from '../pages/main/Main.tsx';
import Login from '../pages/login/Login.tsx';
import Catalog from '../pages/catalog/Catalog.tsx';
import Contacts from '../pages/contacts/Contacts.tsx';
import News from '../pages/news/News.tsx';
import NewIdPage from '../pages/newsItem/NewIdPage.tsx';
import Registration from '../pages/registration/Registration.tsx';
import Page404 from '../pages/page404/Page404.tsx';


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


