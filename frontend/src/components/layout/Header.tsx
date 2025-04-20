"use client"

import Link from "next/link"
import { FiLogIn } from "react-icons/fi"
import { FaUserAlt } from "react-icons/fa"
import styles from "@/layout/Header.module.css"

function Header() {
  const data: boolean = true

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">Main Page</Link>
          </li>
          <li>{data ? <Link href="/project">Projects</Link> : null}</li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>Login</span>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
