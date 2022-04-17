import React from "react"
import logoImage from '../../assets/img/logo.svg'
import findImage from '../../assets/img/find.svg'
import settingsImage from '../../assets/img/settings.svg'
import accountImage from '../../assets/img/account.svg'

import styles from './Header.module.scss'
const organization = 'Arcadia Inc.'

const Header = () => {
    return (
      <div className={styles['header-top']}>
        <div className={styles['logo-button']}>
            <a href="/">
              <img src={logoImage} alt="" />
            </a>
        </div>
        <div className={styles['app-name']}>React Teams</div>
        <div className={styles['search-bar']}>
          <div className={styles['search-box']}>
            <img src={findImage} alt="" />
            <input placeholder="Search" type="text" />
          </div>          
        </div>
        <div className={styles['menu-h-wrapper']}>
          <div className={styles['settings-button']}>
            <img src={settingsImage} alt="" />
          </div>
          <div className={styles['account-button']}>
            <span>{organization}</span>
            <img src={accountImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;