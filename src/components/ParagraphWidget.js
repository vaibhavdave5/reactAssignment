import React from 'react'


const ParagraphWidget = ({widget, updateWidget, deleteWidget, upWidget, downWidget, preview}) =>

            <div className="row rowpad" >
                <div className="col-1"></div>
                <div className="col-10 editor-border">
                    {
                        preview?
                    <div className="row">
                        <div className="col-8">
                            <h2>Paragraph Widget</h2>
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
                    </div>
                            : ''
                    }


                    <div className="row">
                        <div className="col-12">

                            {

                            preview?
                            <div className="form-group">
                                <label htmlFor="p-input-1">Paragraph Input</label>
                                <textarea
                                    id = "p-input-1"
                                    rows="4"
                                    cols="100"
                                    placeholder="Enter text here"
                                    onChange={(event) => {
                                        widget.text = event.target.value
                                        updateWidget(widget)
                                    }}
                                ></textarea>
                            </div>
                                : ''
                            }

                            {
                                preview?
                            <div className="form-group">
                                <label htmlFor="p-input">Widget Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="p-input"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name" />
                            </div>
                            : ''
                            }

                            {
                                preview?

                            <div className = "row">
                                <h5 className="float-md-left">Preview</h5>
                            </div>

                                    : ''
                            }
                            <div className = "row">

                                <div className = "float-md-left">
                                    <h1>{widget.text}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

export default ParagraphWidget;