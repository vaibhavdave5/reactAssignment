import React from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget, upWidget, downWidget, preview}) =>

            <div className="row rowpad">
                <div className="col-1"></div>
                <div className="col-10 editor-border">

                    {
                        preview?
                    <div className="row">
                        <div className="col-8">
                            <h2>Image Widget</h2>
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
                                <label htmlFor="imageLabel">Image URL</label>
                                <input type="text"
                                       className="form-control"
                                       id="imageLabel"
                                       aria-describedby="emailHelp"
                                       placeholder="https://www.w3schools.com/images/w3schools_green.jpg"
                                       onChange={event => {
                                           widget.imageURL = event.target.value
                                           updateWidget(widget)
                                       }}
                                />
                            </div>
                                    : ''
                            }

                            {

                                preview?
                            <div className="form-group">
                                <label htmlFor="widgetName">Widget Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="widgetName"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name" />
                            </div>
                                    : ''
                            }

                            {

                                preview?
                            <div className = "row">
                                <h3 className="float-md-left">Preview</h3>
                            </div>
                                    : ''
                            }

                            <div className = "row">

                                <div className = "float-md-left">

                                    <img src={widget.imageURL}
                                         alt="W3Schools.com"
                                         className = "img-widget" />

                                </div>

                            </div>



                        </div>
                    </div>


                </div>
            </div>


export default ImageWidget