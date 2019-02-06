import React from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) =>

    <div className="row rowpad" >
                <div className="col-1"></div>
                <div className="col-10 editor-border">
                    <div className="row">
                        <div className="col-8">
                            <h2>List Widget</h2>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-up f-icons" ></button>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-down f-icons"></button>
                                </div>
                                <div className="col-5">
                                    <select className="custom-select type-widget">
                                        <option>List</option>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-window-close f-icons"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea rows="4"
                                          cols="100"
                                          placeholder="Enter list here"></textarea>
                            </div>
                            <div className="form-group">
                                <select className="custom-select">
                                    <option>Unordered List</option>
                                    <option>Order List</option>
                                </select>
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
                                    <h1>List</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


export default ListWidget;