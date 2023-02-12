import { useState } from "react";
import { NavLink } from "react-router-dom";

import Btn from "../Buttons/Btn";
import FormLiks from "./FormLinks";

import { ERoutes } from "../../enums/routesEnum";

import styles from "./FormsStyles.module.scss";

interface ICredentials {
    email: string;
    password: string;
    confirmPassword: string;
}

interface IRegisterFormProps {
   submitHandler: (credentials: ICredentials) => void;
}

export default function RegisterForm({ submitHandler }: IRegisterFormProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'confirm-password':
                setConfirmPassword(value)
             break;
            default:
            console.log('error in RegisterPage');;
       }
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        
        if (!email || !password || !confirmPassword) {
            return;
        }

        if(password !== confirmPassword) {
            return;
        }

        const credentials = {
            email,
            password,
            confirmPassword
        };

        submitHandler(credentials);
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.field} 
                value={email}
                name="email"
                type="email" 
                placeholder="Email" 
                required
                onChange={handleChange}
            />
            <input 
                className={styles.field} 
                value={password}
                name="password"
                type="password" 
                placeholder="Password" 
                minLength={6}
                required
                onChange={handleChange}
            />
            <input 
                className={styles.field} 
                value={confirmPassword}
                name="confirm-password"
                type="password" 
                placeholder="Confirm Password"
                minLength={6}
                required
                onChange={handleChange}
            />
            <div className={styles.controlsWrapper}>
                <ul className={styles.controlsList}>
                    <li className={styles.controlsListItem}>
                        <Btn>Create</Btn>
                    </li>
                    <li className={styles.controlsListItem}>
                        <NavLink className={styles.createNewLink} to={ERoutes.Login}>Back to Log In</NavLink>
                    </li>
                </ul>
               <FormLiks />
            </div>
       </form>
    )
}