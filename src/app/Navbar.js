import React from 'react'
import Link from "next/link"



export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="izquierda">
                <Link href="/">Inicio</Link>
                <Link className="tienda" href="/tienda">Tienda</Link>
                <Link className="blog" href="/about">Blog</Link>
            </span>
            <span className="derecha">
                <Link className="acerca" href="/about-company">Acerca de...</Link>
                <Link href="/registro">Registrarme</Link>
            </span>
        </nav>
    )
}

