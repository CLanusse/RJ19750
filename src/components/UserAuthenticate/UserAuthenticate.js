import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";

export const UserAuthenticate = () => {


    const {setIsAuthenticated} = useContext(UserAuthContext);

    const handlesubmit = () => {
        setIsAuthenticated(true);
    }
    return (
    
    <>

        <div className="container">
            <h2>Por favor logueate.</h2>
            <hr/>

            <div className="row">
                <button onClick={handlesubmit}> Login </button>
            </div>
        </div>
    </>
    );
}