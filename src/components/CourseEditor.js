import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    this.state = {
      course: course,
      module: course.modules[0]
    }
  }
  selectModule = module =>
    this.setState({
      module: module
    })
  render() {
    return (
      <div>
      <div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">CS5610 WEB DEV</a>
			<button className="navbar-toggler" 
			        type="button" 
			        data-toggle="collapse"
				    data-target="#navbarColor01" 
				    aria-controls="navbarColor01"
				    aria-expanded="false" 
				    aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" 
			     id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
					<a className="nav-link" 
					   href="#">Built
							<span className="sr-only">(current)</span>
					</a></li>
					<li className="nav-item">
					   <a className="nav-link" 
					      href="#">Pages</a></li>
					<li className="nav-item">
					    <a className="nav-link" 
					       href="#">App</a></li>
					<li className="nav-item">
					     <a className="nav-link" 
					        href="#">Store</a></li>
					<li className="nav-item">
					     <a className="nav-link" 
					        href="#">Settings</a></li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<button className="btn btn-outline-success my-2 my-sm-0" 
					        type="submit">+</button>
				</form>
			</div>
		</nav>
	</div>

	<div className="row">
		<div className="col-2 sidebar">
			<ul className="nav flex-column nav-pills">
				<div className="nav-link alert alert-dismissible alert-secondary">
					<button type="button" className="close " data-dismiss="alert">&times;</button>
					<a href="#" className="alert-link">Module 1</a>.
				</div>
				<div className="nav-link alert alert-dismissible alert-primary">
					<button type="button" 
					        className="close" 
					        data-dismiss="alert">&times;</button>
					<a href="#" 
					   className="alert-link">Module 2</a>.
				</div>
				<div className="nav-link alert alert-dismissible alert-secondary">
					<button type="button" 
					        className="close" 
					        data-dismiss="alert">&times;</button>
					<a href="#" 
					   className="alert-link">Module 3</a>.
				</div>
				<div className="nav-link alert alert-dismissible alert-secondary">
					<button type="button" 
					        className="close" 
					        data-dismiss="alert">&times;</button>
					<a href="#" 
					   className="alert-link">Module 4</a>.
				</div>
				<div className="row">
					<div className="col-md-8"></div>

					<div className="col-md-4 float-right">
						<button className="fa fa-plus" 
						        aria-hidden="true"></button>
					</div>
				</div>
			</ul>
		</div>
		<div className="col-10">
			<div className="row">
				<ul className="nav nav-tabs">
					<li className="nav-item">
					    <a className="nav-link active" 
					       href="#">Lesson 1</a></li>
					<li className="nav-item">
					    <a className="nav-link" 
					       href="#">Lesson 2</a>
					</li>
					<li className="nav-item">
					     <a className="nav-link" 
					        href="#">Lesson 3</a>
					</li>
					<li className="nav-item">
					     <a className="nav-link" 
					        href="#">+</a>
					</li>
				</ul>
			</div>

			<div className="row">
				<ul className="nav nav-pills navpad" >
					<li className="nav-item navpad"><a
						className="nav-link active" 
						href="#">Topic 1</a></li>
					<li className="nav-item navpad"><a
						className="nav-link btn btn-light" 
						href="#">Topic 2</a></li>
					<li className="nav-item navpad" ><a
						className="nav-link btn btn-light" 
						href="#">Topic 3</a></li>
					<li className="nav-item navpad"><a
						className="nav-link btn btn-light" 
						href="#">+</a></li>
				</ul>
			</div>
			<div className="row">
				<div className="col-8"></div>
				<div className="col-4">
					<button type="button" 
					        className="btn btn-success" 
					        data-toggle="button"
						    autocomplete="off">Save</button>
					<button type="button" 
					        className="btn btn-primary" 
					        data-toggle="button"
						    aria-pressed="false" 
						    autocomplete="off">Preview</button>
					<button type="button" 
					        className="btn btn-warning" 
					        data-toggle="button"
						    aria-pressed="false" 
						    autocomplete="off">Add Widget</button>
				</div>
			</div>
			<br />

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
								      placeholder="Enter text here"></textarea>
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
</div>
    )
  }
}
export default CourseEditor