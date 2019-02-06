import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";

const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div>
        {
            widget.type=='HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                widget={widget}
                deleteWidget={deleteWidget}
            />
            ||
            widget.type=='IMAGE'   &&
            <ImageWidget   updateWidget={updateWidget}
                           widget={widget}
                           deleteWidget={deleteWidget}/>
            ||
            widget.type=='PARAGRAPH'   &&
            <ParagraphWidget   updateWidget={updateWidget}
                               widget={widget}
                               deleteWidget={deleteWidget}/>
            ||
            widget.type=='LIST'   &&
            <ListWidget   updateWidget={updateWidget}
                          widget={widget}
                          deleteWidget={deleteWidget}/>
            ||
            widget.type=='LINK'   &&
            <LinkWidget   updateWidget={updateWidget}
                          widget={widget}
                          deleteWidget={deleteWidget}/>
        }
    </div>

export default WidgetComponent