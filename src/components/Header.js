import React from 'react'

const Header = (props) => {
    const { titulo, bgImage } = props;
    return (
        <header className={`background ${bgImage}`}>
            {titulo}
        </header>
    )
}

export default Header
