import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  ,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState({});

    const [error,setError]=useState('');


    const auth = getAuth();

    const SigninUsingGoogle=(history,from)=>{
        setIsLoading(true)
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            setUser(result.user)
            history.replace(from)
            
        })
       .finally(()=>setIsLoading(false))
        
    }
    useEffect(()=>{
        const UnSubscribed=onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false)
        })
        return ()=>UnSubscribed;
    },[])

    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{

        })
        .finally(()=>setIsLoading(false))
    }
    return {
        user,
        isLoading,
        
        SigninUsingGoogle,
        logOut,
        
    }
}
export default useFirebase;