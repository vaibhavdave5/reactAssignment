import React from 'react'

const ModuleListItem = ({module}) =>
    <div className="nav-link alert alert-dismissible alert-secondary">
        <button type="button" className="close " data-dismiss="alert">&times;</button>
        <a href="#" className="alert-link">{module.title}</a>.
    </div>

export default ModuleListItem;