
const widgets =
    {
        widgets: []
    }
const mapWidgets = {
    "1" : widgets
}

const widgetReducer = (state = widgets, action) => {
    switch(action.type) {
        case 'UP_WIDGET':
        {
            const id = action.widget.id;
            const index = action.widget.index;
            const up_index = index - 1
            console.log(index)
            console.log(up_index)
            const temp = state.widgets[index]
            state.widgets[index] = state.widgets[up_index]
            state.widgets[up_index] = temp
            state.widgets[up_index].index = up_index;
            state.widgets[index].index = index;

            for(var i=0 ; i < state.widgets.length; i++){
                if(state.widgets.length === 1){
                    state.widgets[i].hidedown ="disabled"
                    state.widgets[i].hideup ="disabled"
                }
                else{
                    if(i===0){
                        state.widgets[i].hideup = "disabled"
                        state.widgets[i].hidedown = ""
                    }

                    else if(i===(state.widgets.length-1)){
                        state.widgets[i].hidedown = "disabled"
                        state.widgets[i].hideup = ""
                    }

                    else{
                        state.widgets[i].hidedown = ""
                        state.widgets[i].hideup = ""
                    }
                }
            }

            return {widgets : state.widgets}
        }

        case 'DOWN_WIDGET':
        {
            var id = action.widget.id;
            var index = action.widget.index;
            var down_index = index + 1
            var temp = state.widgets[index]
            state.widgets[index] = state.widgets[down_index]
            state.widgets[down_index] = temp
            state.widgets[down_index].index = down_index;
            state.widgets[index].index = index;
            for(var i=0 ; i < state.widgets.length; i++){
                if(state.widgets.length === 1){
                    state.widgets[i].hidedown ="disabled"
                    state.widgets[i].hideup ="disabled"
                }
                else{
                    if(i===0){
                        state.widgets[i].hideup = "disabled"
                        state.widgets[i].hidedown = ""
                    }

                    else if(i===(state.widgets.length-1)){
                        state.widgets[i].hidedown = "disabled"
                        state.widgets[i].hideup = ""
                    }

                    else{
                        state.widgets[i].hidedown = ""
                        state.widgets[i].hideup = ""
                    }
                }
            }
            return {widgets : state.widgets}
        }

        case 'DELETE_WIDGET': {
            state.widgets = state.widgets.filter(widget => widget.id !== action.widget.id)
            if(state.widgets.length === 0) {
                return {widgets: state.widgets}
            }

            if(state.widgets.length <= 1) {
                state.widgets[0].hidedown = "disabled"
                state.widgets[0].hideup =  "disabled"
            }
            return {widgets: state.widgets}
        }
        case 'ADD_WIDGET': {
                state.widgets = [
                    ...state.widgets,
                    {
                        id: new Date().getTime(),
                        title: 'Widget 1',
                        type: 'HEADING',
                        text: 'Sample Text',
                        size: 2,
                        listArr: ["Put each item", "in new", "line"],
                        listType: "1",
                        imageURL: "https://www.w3schools.com/images/w3schools_green.jpg",
                        linkText: "Youtube",
                        linkURL: "https://www.youtube.com/",
                        index: state.widgets.length,
                        hideup: "",
                        hidedown: "disabled",
                        topicId: action.id
                    }
                ]


            for(var i=0 ; i < state.widgets.length; i++){
                if(state.widgets.length === 1){
                    state.widgets[i].hidedown ="disabled"
                    state.widgets[i].hideup ="disabled"
                }
                else{
                    if(i===0){
                        state.widgets[i].hideup = "disabled"
                        state.widgets[i].hidedown = ""
                    }

                    else if(i===(state.widgets.length-1)){
                        state.widgets[i].hidedown = "disabled"
                        state.widgets[i].hideup = ""
                    }

                    else{
                        state.widgets[i].hidedown = ""
                        state.widgets[i].hideup = ""
                    }
                }
            }

            return{widgets: state.widgets}

        }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }


        case 'FIND_WIDGET':
        {
            for(var i=0 ; i < state.widgets.length; i++){
                if(state.widgets[i].id === action.widget.id){
                    return {widgets: state.widgets[i]}
                }
            }
        }

        case  'FIND_ALL_WIDGETS_FOR_TOPIC':{
            var temparr= []
            for(var i=0 ; i < state.widgets.length; i++){
                if(state.widgets[i].topicId === action.id){
                    temparr.push(state.widgets[i])
                }
            }
            return {widgets: temparr}
        }

        case 'FIND_ALL_WIDGETS':{
            return{
                widgets: state.widgets
            }
        }


        default: {
            return state;
        }
    }
}

export default widgetReducer;