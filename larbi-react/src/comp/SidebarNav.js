import React from 'react'

const SidebarNav = () => {
    const links = [
        <a href='.introduction'>./ home</a>,
        <a href='.about'>./ about</a>,
        <a href='.experience'>./ experience</a>
    ]
  return (
    <div className="sidebar-links">
        {links.map((link, i) => (
            <div>{link}</div>
        ))}
    </div>
  )
}

export default SidebarNav