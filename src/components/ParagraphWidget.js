import React from 'react'


const ParagraphWidget = ({widget, updateWidget, deleteWidget}) =>

            <div className="row rowpad" >
                <div className="col-1"></div>
                <div className="col-10 editor-border">
                    <div className="row">
                        <div className="col-8">
                            <h2>Paragraph Widget</h2>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-up f-icons"></button>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-down f-icons"></button>
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
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea
                                    rows="4"
                                    cols="100"
                                    placeholder="Enter text here"></textarea>
                            </div>

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputWidgetName"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name" />
                            </div>


                            <div className = "row">
                                <h3 className="float-md-left">Preview</h3>
                            </div>
                            <div className = "row">

                                <div className = "float-md-left">
                                    <h1>Enter text here</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

export default ParagraphWidget;