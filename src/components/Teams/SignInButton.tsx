import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./../../store/teams/teamsConfig";
import { useActions } from "../../hooks/useActions";
import styles from './SignInButton.module.scss'

const SignInButton = () => {
    const { instance } = useMsal();


    const {setToken} = useActions()

    function handleLogin(instance: any) {
        instance.loginPopup(loginRequest).then(function(loginResponse: any) {
            setToken(loginResponse.accessToken);
        }).catch((e: any) => {
            console.error(e);
        });
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.signin} onClick={() => handleLogin(instance)}>Graph Sign in</div>
        </div>
    );
}

export default SignInButton;