import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";


const useAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useAuth;