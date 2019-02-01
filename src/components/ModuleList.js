import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            course: this.props.course
        };

        // this.titleChanged = this.titleChanged.bind(this);
    }

    createModule = () => {
        this.setState(
            {
                modules: [
                    ...this.state.modules,
                    this.state.module
                ]
            }
        )
    }


    moduleColor = (module) => {
        if(module.id === this.props.selectedModule.id){
            return "nav-link alert alert-dismissible alert-danger";
        }
        return "nav-link alert alert-dismissible alert-primary";
    }


    render() {
        return(
            <div>
                {this.state.course.modules.map(
                    (module) => {
                        return (

                            <ModuleListItem
                                module={module}
                                selectModule={this.props.selectModule}
                                moduleColor={this.moduleColor}
                                delModule={this.props.delModule}
                                editModule={this.props.titleChanged}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default ModuleList;


