import React from 'react';

function Nav({currentPage, handlePageChange}) {
    
    return(
        <header className='flex-row px-1'>
            <nav>
            <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              Alex Aguilar Rodriguez
            </a>
          </li>
          <section className='flex-row px-1 navbar'>
            <li><a href="#about" onClick={() => handlePageChange("Home")}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >About</a></li>
            <li><a href="#contact" onClick={() => handlePageChange("Contact")}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >Contact</a></li>
            <li><a href="#Resume" onClick={() => handlePageChange("Resume")}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a></li>
            <li><a href="#Portfolio" onClick={() => handlePageChange("Portfolio")}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >Portfolio</a></li>
          </section>
        </ul>
            </nav>
        </header>
    );
}

export default Nav; 