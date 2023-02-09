import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="Page1">Accueil</Link></li>
            <li><Link to="Page2">A propos</Link></li>
            <li><Link to="Page3">Contact</Link></li>
        </ul>
    </nav>
  )
}