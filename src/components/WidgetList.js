import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({widgets, topic, addWidget, deleteWidget, updateWidget, upWidget, downWidget}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
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
                    />
                )
            }
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2 float-right">
            <button
                onClick={addWidget}
                className="btn-success fa-2x fas fa-plus-circle"
            >

            </button>
                </div>
            </div>
        </div>
    </div>

export default WidgetList