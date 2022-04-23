import React from "react";
import { useGetAuthQuery } from "../../store/teams/auth.api";
import { useActions } from "../../hooks/useActions";
import styles from './SkypeSignInButton.module.scss'

const SkypeSignInButton = () => {
    const {setAuth} = useActions()
    const {data} = useGetAuthQuery(1)

    return data ? (
        <div className={styles.overlay}>
            <div className={styles.signin} onClick={() => setAuth(data.authorization)}>Teams Sign in</div>
        </div>
    ) : (
        <div>error</div>
    );
}

export default SkypeSignInButton;