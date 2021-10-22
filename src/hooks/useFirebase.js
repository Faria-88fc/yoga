import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import initializeAuthentication from "../firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

        .finally(() =>setIsLoading(false));
        
    }

    
    const emailHandle = e =>{
        setEmail(e.target.value)
    }
    const passwordHandle = e =>{
        setPassword(e.target.value)
    }

    const handleEmailRegistration = e =>{
        // e.preventDafault();
        if (password.length<6){
            setError('password mest be at least 6 characters')
        }
        createUserWithEmailAndPassword (auth, email,password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            setError('')
            

        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const emailPasswordSignIn = (email,password) =>{
        signInWithEmailAndPassword (auth,email,password)
        .then(result =>{
            const user = result.user
            setUser(user)
            console.log(result);
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    
    const logout = () =>{
        setIsLoading(true);
        signOut(auth)
        .then (() =>{
            setUser({});
        })
        .finally(() => setIsLoading(false))
    }
    useEffect( () =>{
        onAuthStateChanged(auth, user => {
            if(user){
                console.log(user);
                setUser(user)
            }
            setIsLoading(false);
        })

    }, [])
    return {
        user,
        error,
        signInWithGoogle,
        logout,
        handleEmailRegistration,
        emailHandle,
        passwordHandle,
        emailPasswordSignIn,
        isLoading
       

    }
}
export default useFirebase;
