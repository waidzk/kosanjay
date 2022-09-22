import React from 'react'

import Button from 'elements/Button'
import BrandIcon from 'parts/iconText'

export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

  return (
    <navbar className='flex justify-between items-center'>
        <div className='brand-icon px-10'>
            <BrandIcon />
        </div>
        <div className='menu-link'>
            <ul className='flex items-center'>
                <li className={`link-item${getNavLinkClass("/")}`}>
                    <Button className='nav-link' type='link' href='/'>
                        Home
                    </Button>
                </li>
                <li className={`link-item${getNavLinkClass("/browse-by")}`}>
                    <Button className='nav-link' type='link' href='/browse-by'>
                        Browse by
                    </Button>
                </li>
                <li className={`link-item${getNavLinkClass("/stories")}`}>
                    <Button className='nav-link' type='link' href='/stories'>
                        Stories
                    </Button>
                </li>
                <li className={`link-item${getNavLinkClass("/agents")}`}>
                    <Button className='nav-link' type='link' href='/agents'>
                        Agents
                    </Button>
                </li>
            </ul>
        </div>
    </navbar>
  )
}
