import React from 'react'


const WidgetList = () =>
    <div className="row">

        <div className="col fixed-right">

            <div className="row rowpad" >
                <div className="col-1"></div>
                <div className="col-10 editor-border">
                    <div className="row">
                        <div className="col-8">
                            <h2>Heading Widget</h2>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-up f-icons" ></button>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-arrow-circle-down f-icons" ></button>
                                </div>
                                <div className="col-5">
                                    <select className="custom-select type-widget">
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-window-close-o f-icons" ></button>
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
                                       placeholder="Enter Heading" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select">
                                    <option>Heading 1</option>
                                    <option>Heading 2</option>
                                    <option>Heading 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputWidgetName"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name" />
                            </div>

                            <h3>Preview</h3>
                            <div className = "row">
                                <div className = "col-10">
                                    <h1>Enter Heading</h1>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

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
                                    <select className="custom-select type-widget">
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-window-close-o f-icons"></button>
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
                                    placeholder="Enter text here">sd</textarea>
                            </div>

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputWidgetName"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name" />
                            </div>

                            <h3>Preview</h3>
                            <div className = "row">
                                <div className = "col-10">
                                    <h1>Enter text here</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
                                    <button className="fa fa-window-close-o f-icons"></button>
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

                            <h3>Preview</h3>

                            <div className = "row">
                                <div className = "col-10">
                                    <h1>List</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    <button className="fa fa-window-close-o f-icons" ></button>
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

                            <h3>Preview</h3>
                            <div className = "row">
                                <div className = "col-10">
                                    <img src="https://www.w3schools.com/images/w3schools_green.jpg"
                                         alt="W3Schools.com"
                                         className = "img-widget" />
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="row rowpad">
                <div className="col-1"></div>
                <div className="col-10 editor-border">
                    <div className="row">
                        <div className="col-8">
                            <h2>Link Widget</h2>
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
                                        <option>Link</option>
                                        <option>List</option>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>Image</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <button className="fa fa-window-close-o f-icons" ></button>
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
                                       placeholder="Enter Link Here"/>
                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputHeading"
                                       aria-describedby="emailHelp"
                                       placeholder="Link text"/>
                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputWidgetName"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter Widget Name"/>
                            </div>
                            <h3>Preview</h3>
                            <div className = "row">
                                <div className = "col-10">
                                    <a href="#">Link Text</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
export default WidgetList