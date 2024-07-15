"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigetion() {
    const path = usePathname();

    return (
        <nav>
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