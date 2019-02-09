import React from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget, upWidget, downWidget, preview}) =>

                <div className="row rowpad" >
                     <div className="col-1"></div>

                    <div className="col-10 editor-border">
                        {
                            preview?
                        <div className="row">
                        <div className="col-8">
                            <h2>Heading Widget</h2>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-up f-icons"
                                            disabled={widget.hideup}
                                            onClick={() => upWidget(widget)}></button>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-down f-icons"
                                            disabled={widget.hidedown}
                                            onClick={() => downWidget(widget)}></button>
                                </div>
                                <div className="col-5">
                                    <select className="custom-select type-widget"
                                            onChange={(event) => {
                                                widget.type = event.target.value
                                                updateWidget(widget)
                                            }} value={widget.type}>
                                        <option value="HEADING">Heading</option>
                                        <option value="IMAGE">Image</option>
                                        <option value ="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="LINK">Link</option>
                                    </select>


                                </div>
                                <div className="col-2">
                                    <button className="fa fa-window-close f-icons"
                                            onClick={() => deleteWidget(widget)}></button>
                                </div>
                            </div>
                        </div>
                    </div>  : ''
                        }
                    <div className="row">
                        <div className="col-12">

                            {

                                preview?
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputHeading"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Heading"
                                       onChange={event => {
                                                       widget.text = event.target.value
                                                       updateWidget(widget)
                                        }}

                                />
                            </div>

                                    : ''
                            }
                            {

                             preview?

                            <div className="form-group">
                                <select className="custom-select"
                                        onChange={event => {
                                            widget.size = parseInt(event.target.value)
                                            updateWidget(widget)
                                            }}>
                                    <option value="1">Heading 1</option>
                                    <option value="2">Heading 2</option>
                                    <option value="3">Heading 3</option>
                                    <option value="4">Heading 4</option>
                                    <option value="5">Heading 5</option>
                                </select>
                            </div>

                                 : ''
                            }

                            {
                                preview?

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputWidgetName"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name" />
                            </div>

                                    : ''
                            }

                            <div className = "row">

                                {
                                    preview?
                                    <h5 className="float-md-left">Preview</h5>
                                        : ''
                                }


                            </div>




                            <div className = "row">

                                <div className = "float-md-left">
                                         {
                                             widget.size === 1 && <h1>{widget.text}</h1> ||
                                             widget.size === 2 && <h2>{widget.text}</h2> ||
                                             widget.size === 3 && <h3>{widget.text}</h3> ||
                                             widget.size === 4 && <h4>{widget.text}</h4> ||
                                             widget.size === 5 && <h5>{widget.text}</h5>
                                         }
                                </div>

                            </div>
                        </div>
                    </div>

                </div>



            </div>



export default HeadingWidget