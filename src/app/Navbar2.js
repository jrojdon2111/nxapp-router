
import Link from "next/link"



export default function Navbar2() {
    return (
        <div class="div1">
            <Link href="/tienda/electronica">Electrónica</Link>
            <br></br>
            <Link href="/tienda/decoracion">Decoración</Link>
            <br></br>
            <Link href="/tienda/moviliario">Inmoviliario</Link>
            <br></br>
            <Link href="/tienda/libros">Libros</Link>
        </div>
    )
}

