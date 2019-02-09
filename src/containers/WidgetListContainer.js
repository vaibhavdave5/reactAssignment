import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = (dispatch , myprops) => ({
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget,
            topic: myprops.id
        }),
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET',
            topic: myprops.id
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            topic: myprops.id
        }),
    upWidget: widget => {
        dispatch({
            type: 'UP_WIDGET',
            widget: widget,
            topic: myprops.id
        })
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            topic: myprops.id
        })
    },
    downWidget: widget => {
        dispatch({
            type: 'DOWN_WIDGET',
            widget: widget,
            topic: myprops.id
        })
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            topic: myprops.id
        })
    },
    findAllWidgetsForTopic: () =>{
        dispatch({
            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
            topic: myprops.id
        })
    }

})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer