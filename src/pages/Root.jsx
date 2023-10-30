import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function climbDropdown() {
    document.getElementById("climbDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

const Root = () => {
    return <>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
            <NavLink to='/climbs'>Climbs</NavLink>
        </li>
      </ul>
    </nav>

    <hr />

    <main>
      <Outlet />
    </main>
  </>
}

export default Root
