import React from 'react';
import { NavLink } from "react-router-dom";



export const Header = ()=>(
    <section className="Header">
        <NavLink className="Header__item" to='/' activeClassName="Header__item--selected" exact={true}>Weekly</NavLink>
        <NavLink className="Header__item" to='/list' activeClassName="Header__item--selected">List</NavLink>
        <NavLink className="Header__item" to='/search' activeClassName="Header__item--selected"></NavLink>
    </section>
    );