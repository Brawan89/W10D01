import NavBar from "./navBar";
const Layout = ({children}) => {

    return <>
    <NavBar/>
    {children}
   
    </>;
}
 
export default Layout;