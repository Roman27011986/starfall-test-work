import { useState } from "react";
import { Navigate } from "react-router-dom";

import RegisterForm from "../../components/Forms/RegisterForm";

import { ERoutes } from "../../enums/routesEnum";

export default function RegisterPage() {
    const [user, setUser] = useState(null);

    if(user) {
        return <Navigate to={`/${ERoutes.Fraction}`} />
    }

    const submitHandler = (credentials: any) => {
        setUser(credentials);
    }

    return <RegisterForm submitHandler={submitHandler}/>
}