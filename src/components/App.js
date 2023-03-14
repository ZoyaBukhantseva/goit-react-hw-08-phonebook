import Navigation from "./Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoute from "./Routing/PublicRoute";
import PrivateRoute from "./Routing/PrivateRoute";
import Loading from "./Loading/Loading";
import NotFound from "../pages/notFoundPage/NotFoundPage";
import { ChakraProvider } from "@chakra-ui/react";
const App=()=>{
    const LoginPage = lazy(() => import("..//pages/LoginPage/LoginPage.jsx"));
    const RegisterPage = lazy(() => import("../pages/registerPage/RegisterPage.jsx"));
    const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage.jsx"));
return (
 <ChakraProvider  resetCSS = { false }>
 <Navigation/>
 <Suspense fallback={ <Loading/> } >
  <Routes> 
<Route path="/" element={< LoginPage />} />
<Route element = { <PublicRoute/> } >                         
<Route path="/login" element={< LoginPage />} />   
<Route path="/register" element={< RegisterPage />} />
</Route> 
 <Route element={ <PrivateRoute/> }>  
<Route path="/contacts" element={< ContactsPage />} />
</Route>   
 <Route path="*" element={<NotFound/>}/>
  </Routes>
 </Suspense>
</ChakraProvider>
);
};
 

export default App;

