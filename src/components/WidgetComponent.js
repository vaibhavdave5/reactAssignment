import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";

const WidgetComponent = ({widget, deleteWidget, updateWidget, upWidget, downWidget}) =>
    <div>
        {
            widget.type=='HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                widget={widget}
                deleteWidget={deleteWidget}
                upWidget={upWidget}
                downWidget={downWidget}
            />
            ||
            widget.type=='IMAGE'   &&
            <ImageWidget   updateWidget={updateWidget}
                           widget={widget}
                           deleteWidget={deleteWidget}
                           upWidget={upWidget}
                           downWidget={downWidget}
            />
            ||
            widget.type=='PARAGRAPH'   &&
            <ParagraphWidget   updateWidget={updateWidget}
                               widget={widget}
                               deleteWidget={deleteWidget}
                               upWidget={upWidget}
                               downWidget={downWidget}
            />
            ||
            widget.type=='LIST'   &&
            <ListWidget   updateWidget={updateWidget}
                          widget={widget}
                          deleteWidget={deleteWidget}
                          upWidget={upWidget}
                          downWidget={downWidget}
            />
            ||
            widget.type=='LINK'   &&
            <LinkWidget   updateWidget={updateWidget}
                          widget={widget}
                          deleteWidget={deleteWidget}
                          upWidget={upWidget}
                          downWidget={downWidget}
            />
        }
    </div>

export default WidgetComponent