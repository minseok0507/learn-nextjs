"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../style/navigation.module.css"

export default function Navigetion() {
    const path = usePathname();
    if (path === "/about-us") {
        return;
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : null}
                </li>
                <li>
                    <Link href="/about-us">About</Link>  {path === "/about-us" ? "🔥" : null}
                </li>

            </ul>
        </nav>
    )
}