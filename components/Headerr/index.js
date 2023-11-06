
'use client';
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Burger from '../Burger';
import Menu from '../Menu'
import Stairs from '../Stairs';

export default function () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div>
            <Burger openMenu={() => { setMenuIsOpen(true) }} />
            <AnimatePresence mode="wait">
                {
                    menuIsOpen && <>
                        <Stairs />
                        <Menu closeMenu={() => { setMenuIsOpen(false) }} />
                    </>
                }
            </AnimatePresence>
        </div>
    )
}