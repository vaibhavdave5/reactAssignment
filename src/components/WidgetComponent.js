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
            <ImageWidget   widget={widget}/>
            ||
            widget.type=='PARAGRAPH'   &&
            <ParagraphWidget   widget={widget}/>
            ||
            widget.type=='LIST'   &&
            <ListWidget   widget={widget}/>
            ||
            widget.type=='LINK'   &&
            <LinkWidget   widget={widget}/>
        }
    </div>

export default WidgetComponent