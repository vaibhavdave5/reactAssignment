import React from 'react'



const ModuleListItem = ({module, selectModule, moduleColor, delModule, editModule}) =>
    <div className={moduleColor(module)}
         onClick={() => selectModule(module)} >
        <div className="row">
            <div className="col-8">
                <a href="#"
                   className="alert-link">{module.title}</a>.
            </div>
            <div className="col-2">
                <button type="button"
                        onClick={() => delModule(module)}
                        className="fa fa-trash-alt btn"
                        data-dismiss="alert"/>
            </div>
            <div className="col-2">
                <button type="button"
                        onClick={() => editModule(module)}
                        className="fa fa-edit btn"
                        data-dismiss="alert"/>
            </div>
            </div>
        </div>


export default ModuleListItem;