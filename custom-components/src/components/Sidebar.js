import React from 'react'
import Link from './Link'

function Sidebar() {
    const links = [
        {label: "Dropdown", path: "/"},
        {label: "Accordion", path: "/accordion"},
        {label: "Buttons", path: "/buttons"},
        {label: "Modal", path: "/modal"},
        {label: "Table", path: "/table"},
    ];

    const renderedLinks = links.map(link => <Link to={link.path} key={link.label} className={'mb-3'} activeClassName={'font-bold border-l-2 border-blue-500 pl-2'}>{link.label}</Link>);
    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar