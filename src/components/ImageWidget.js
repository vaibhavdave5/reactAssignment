import React from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) =>

            <div className="row rowpad">
                <div className="col-1"></div>
                <div className="col-10 editor-border">
                    <div className="row">
                        <div className="col-8">
                            <h2>Image Widget</h2>
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
                                    <select className="custom-select type-widget">
                                        <option>Image</option>
                                        <option>List</option>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>Link</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-window-close f-icons" ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputHeading"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter URL Here"
                                       value="https://www.w3schools.com/images/w3schools_green.jpg"
                                />
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
                                    <img src="https://www.w3schools.com/images/w3schools_green.jpg"
                                         alt="W3Schools.com"
                                         className = "img-widget" />

                                </div>

                            </div>



                        </div>
                    </div>


                </div>
            </div>


export default ImageWidget