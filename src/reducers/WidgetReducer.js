const widgets =
    {
        widgets: [
            {
                id: 123,
                title: 'Widget 1',
                type: 'HEADING',
                text: 'Sample Text',
                size: 2,
                listArr: ["Put each item","in new","line"],
                listType: "1",
                imageURL: "https://www.w3schools.com/images/w3schools_green.jpg",
                linkText: "Youtube",
                linkURL: "https://www.youtube.com/"
            }

        ]
    }
const widgetReducer = (state = widgets, action) => {
    switch(action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: new Date().getTime(),
                        title: 'Widget 1',
                        type: 'HEADING',
                        text: 'Sample Text',
                        size: 2,
                        listArr: ["Put each item","in new","line"],
                        listType: "1",
                        imageURL: "https://www.w3schools.com/images/w3schools_green.jpg",
                        linkText: "Youtube",
                        linkURL: "https://www.youtube.com/"
                    }
                ]
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        default:
            return state;
    }
}

export default widgetReducer;