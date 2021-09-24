import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Header.module.css'

export default function Header({ companyName, textReplyTime, iconLogo, handleOpen }) {
  return (
    <div className={styles.root}>
      <span className={styles.close_btn} onClick={handleOpen}>
        <AiOutlineClose />
      </span>
      <div className={styles.logo}>
        {iconLogo}
      </div>
      <div className={styles.texts}>
        <span className={styles.texts_h1}>{companyName}</span>
        <span className={styles.texts_span}>{textReplyTime}</span>
      </div>
    </div>
  )
}
