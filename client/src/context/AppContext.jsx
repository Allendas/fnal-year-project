import { createContext, useState } from "react";

export const AppContext = createContext()

const AppCOntextProvider = (props)=>{
    const [user, setUser] = useState(true);

    const value ={
        user, setUser
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppCOntextProvider