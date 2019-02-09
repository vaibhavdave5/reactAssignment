import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = (state) =>({
    widgets:state.widgets,
    preview : state.preview,
    present : state.present
});



const dispatchToPropertyMatcher = (dispatch, myProps) => ({
    updateWidget : widget =>
        dispatch({
            type:'UPDATE_WIDGET',
            widget : widget,
        }),
    togglePreview: () =>
        dispatch({
            type : 'TOGGLE_PREVIEW',
        }),

    deleteWidget: (widget) =>
        dispatch({
            type:'DELETE_WIDGET',
            widget : widget
        }),

    addWidget : () =>
        dispatch({
            type: 'ADD_WIDGET',
            topicId : myProps.topic.id

        }),

    downWidget : (widget) =>
        dispatch({
            type:'DOWN_POSITION',
            widget : widget
        }),

    upWidget : (widget) =>
        dispatch({
            type:'UP_POSITION',
            widget : widget
        }),

    findWidget : (widget) =>
        dispatch({
            type: 'FIND_WIDGET',
            widget : widget
        }),

    loadWidgets : (widget) =>
        dispatch({
            type:'FIND_ALL_WIDGETS_FOR_TOPIC',
            widget : widget,
            topicId: myProps.topic.id

        }),

    findAllWidgets : (widget) =>
        dispatch({
            type:'FIND_ALL_WIDGETS',
        })


});

const WidgetListContainer =
    connect(stateToPropertyMapper,
            dispatchToPropertyMatcher)(WidgetList)

export default WidgetListContainer