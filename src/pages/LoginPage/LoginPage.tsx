import { useState } from "react";
import { Navigate } from "react-router-dom";

import LoginForm from "../../components/Forms/LoginForm";

import { ERoutes } from "../../enums/routesEnum";

export default function LoginPage() {
    const [user, setUser] = useState(null);

    if(user) {
        return <Navigate to={`/${ERoutes.Fraction}`} />
    }

    const submitHandler = (credentials: any) => {
        setUser(credentials);
    }

    return <LoginForm submitHandler={submitHandler}/>
}