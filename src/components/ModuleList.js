import React from 'react'
import ModuleListItem from "./ModuleListItem";

// class ModuleList extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       module: { title: '' },
//       modules: this.props.modules
//     };
//
//     // this.titleChanged = this.titleChanged.bind(this);
//   }
//
//   createModule = () => {
//     this.setState(
//       {
//         modules: [
//           ...this.state.modules,
//           this.state.module
//         ]
//       }
//     )
//   }
//   titleChanged = (event) => {
//     this.setState(
//       {
//         module: {title: event.target.value}
//       });
//   }
//   render() {
//     return(
//       <div>
//         <h3>Module List</h3>
//         <ul className="list-group">
//           <li className="list-group-item">
//             <input
//               onChange={this.titleChanged}
//               className="form-control"/>
//             <button
//               onClick={this.createModule}
//               className="btn btn-primary btn-block">Add Module</button>
//           </li>
//           {
//             this.state.modules.map(
//               (module) => {
//                 return (
//                   <ModuleListItem
//                     selectModule={this.props.selectModule}
//                     key={module.id}
//                     module={module}/>
//                 )
//               }
//             )
//           }
//         </ul>
//       </div>
//     )
//   }
// }
// export default ModuleList;


const ModuleList = ({course}) =>
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>{course.title}</h3>
      </div>

      <ul className="list-unstyled components">
        <p>Modules</p>
        {course.modules.map(
            (module) => {
              return (
                  <ModuleListItem
                      module={module}/>
              )
            })
        }
        <div className="row">
          <div className="col-md-8"></div>

          <div className="col-md-4 float-right">
            <button className="fa fa-plus"
                    aria-hidden="true"></button>
          </div>
        </div>
      </ul>
    </nav>
export default ModuleList;
