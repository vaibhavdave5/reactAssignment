import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({widgets, preview, topic, addWidget, deleteWidget, updateWidget, upWidget, downWidget,
                        loadWidgets}) => {
    // loadWidgets();
    return (<div>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}
                        upWidget={upWidget}
                        downWidget={downWidget}
                        preview={preview}
                    />
                )
            }
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 float-right">
                    <button
                        onClick={() => addWidget()}
                        className="btn-success fa-2x fas fa-plus-circle"
                    >
                    </button>
                </div>
            </div>
        </div>
    </div>)
}
export default WidgetList