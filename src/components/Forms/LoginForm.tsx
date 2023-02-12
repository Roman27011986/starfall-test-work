import { useState } from "react";
import { NavLink } from "react-router-dom";

import Btn from "../Buttons/Btn";
import FormLinks from "./FormLinks";

import { ERoutes } from "../../enums/routesEnum";

import styles from "./FormsStyles.module.scss";

interface ICredentials {
    email: string;
    password: string;
    stayLogged: boolean;
}

interface ILoginFormProps {
   submitHandler: (credentials: ICredentials) => void;
}

export default function LoginForm({ submitHandler }: ILoginFormProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [stayLogged, setStayLogged] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'checkbox':
                setStayLogged(prev => !prev)
             break;
            default:
            console.log('error in LoginPage');;
       }
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        
        if (!email || !password) {
            return;
        }

        const credentials = {
            email,
            password,
            stayLogged
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
        <label className={styles.labelCheckbox}>
            <input 
                className={styles.fieldCheckbox}
                name="checkbox"
                type="checkbox" 
                checked={stayLogged}
                onChange={handleChange} 
            />
            <span className={styles.customCheckbox}></span>
                Keep Me Logged In
            <div className={styles.warningItem}>
                <div>!</div>
            </div>
        </label>

        <div className={styles.controlsWrapper}>
            <ul className={styles.controlsList}>
                <li className={styles.controlsListItem}>
                    <Btn>Log In</Btn>
                </li>
                <li className={styles.controlsListItem}>
                    <NavLink className={styles.createNewLink} to={ERoutes.Register}>Create New</NavLink>
                </li>
            </ul>
            <FormLinks/>
        </div>
    </form>
    )
}