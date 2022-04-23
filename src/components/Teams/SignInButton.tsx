import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./../../store/teams/teamsConfig";
import styles from './SignInButton.module.scss'

function handleLogin(instance: any) {
    instance.loginPopup(loginRequest).catch((e: any) => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <div className={styles.overlay}>
            <div className={styles.signin} onClick={() => handleLogin(instance)}>Sign in</div>
        </div>
    );
}

export default SignInButton;