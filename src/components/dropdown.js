import React, { useState } from 'react'

function dropdown({ title, items =[], multiSelect = false }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);
    function handleOnclick(item) {}
    return (
        <li className="dd-wrapper">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header_action">
                    <li className="nav-item"><a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link"><i className="fas fa-chevron-up text-muted fa-lg mr-3"></i>Labels</a></li>
                </div>
            </div>
            {open && (
                <div className="nav-item">
                    {items.map(item => (
                    <a href="#" className="nav-link text-dark p-3 mb-2 sidebar-link" key={item.id}><i className="fas fa-plus text-muted fa-lg mr-3"></i>{item.value}</a>
                    ))}
                </div>
            )}
        </li>
    )
}

export default dropdown
