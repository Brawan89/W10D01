import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()

   const goback = () => {
    router.back()
   }

   const homePage = () => {
    router.push("/")
   }

useEffect(() => {
    setTimeout(() => {
        router.push("/")
    }, 3000)
   
}, [])

    return ( <>
        <h1>page not found</h1>
        <p>you will be re-directed in 3 seconds</p>
        <button onClick={goback} > Go Back</button>
        <button onClick={homePage} > Go Home page</button>

    </>

     );
}
 
export default NotFound;