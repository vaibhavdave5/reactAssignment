import CourseService from "../services/CourseService"
const courseService = new CourseService()

const widgetReducer = (state = {widgets:[], preview: true, present:true}, action) => {
    switch(action.type){
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            state.widgets = courseService.findWidgets(action.topicId);
            return{
                widgets:state.widgets,
                preview: state.preview,
                present: true,

            };
        case 'UPDATE_WIDGET':
            state.widgets = courseService.updateWidget(action.widget.id, action.widget);
            return{
                widgets: state.widgets,
                preview:state.preview,
                present: false

            };
        case 'TOGGLE':
            var preview = !state.preview;
            var widgets = state.widgets
            return{
                widgets:widgets,
                preview: preview,
                present: false
            };
        case 'ADD_WIDGET':
            state.widgets = courseService.createWidget(action.topicId, {
                id: new Date().getTime(),
                type: 'HEADING',
                text: 'New Widget',
                size: 1,
                listType : "1"
            });
            return {
                widgets: state.widgets,
                preview: state.preview,
                present:false
            };
        case 'DOWN_POSITION':
            state.widgets = courseService.downWidget(action.widget.id);
            return{
                widgets: state.widgets,
                preview: state.preview,
                present:false
            };
        case 'DELETE_WIDGET':
            state.widgets = courseService.deleteWidget(action.widget.id);

            return{
                widgets:state.widgets,
                preview: state.preview,
                present: false
            };
        case 'UP_POSITION':
            state.widgets =courseService.upWidget(action.widget.id);
            return{
                widgets: state.widgets,
                preview: state.preview,
                present:false
            };
        case 'FIND_WIDGET':
            return courseService.findWidget(action.widget.id);
        case 'FIND_ALL_WIDGETS':
            return state.widgets;

        default:
            return state;
    }
};


export default widgetReducer