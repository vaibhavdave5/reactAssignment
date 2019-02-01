import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({course}) =>
<div>
{course.modules.map(
    (module) => {
        return (
            <ModuleListItem
                module={module}/>
        )
    })
}
</div>
export default ModuleList;
