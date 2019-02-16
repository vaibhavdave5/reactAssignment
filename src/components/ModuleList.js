import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({course, moduleColor, selectModule, selectedModule, delModule, titleChanged}) =>

    <div>
        {course.modules.map(
            (module) => {
                return (

                    <ModuleListItem
                        module={module}
                        selectModule={selectModule}
                        moduleColor={moduleColor}
                        delModule={delModule}
                        editModule={titleChanged}
                    />
                )
            })
        }
    </div>

export default ModuleList;



