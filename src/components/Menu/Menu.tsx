import React from "react"
import bellImage from '../../assets/img/bell.svg'
import chatImage from '../../assets/img/chat.svg'
import teamsImage from '../../assets/img/teams.svg'
import calendarImage from '../../assets/img/calendar.svg'
import phoneImage from '../../assets/img/phone.svg'
import filesImage from '../../assets/img/files.svg'

import styles from './Menu.module.scss'

const menu = [
    {
        title: 'Activity',
        link: '/',
        icon: bellImage
    },
    {
        title: 'Chat',
        link: '/',
        icon: chatImage
    },
    {
        title: 'Teams',
        link: '/',
        icon: teamsImage
    },
    {
        title: 'Calendar',
        link: '/',
        icon: calendarImage
    },
    {
        title: 'Calls',
        link: '/',
        icon: phoneImage
    },
    {
        title: 'Files',
        link: '/',
        icon: filesImage
    }
]

const Menu = () => {
    return (
      <div className={styles['menu-v-wrapper']}>
        <ul>
            {menu.map((item, idx) => (

            <li key={`left_menu_item_${idx}`}>
                <a href={item.link}><img src={item.icon} alt="" />{item.title}</a>
            </li>
            ))}
        </ul>
      </div>
    );
  }
  
  export default Menu;