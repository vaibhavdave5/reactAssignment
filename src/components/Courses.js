import React from 'react';

class App extends React.Component {
   render() {
      return (
         
                    <tr>
                        <td><a href="/course-editor/course-editor.template.client.html">
                         <p><i className="fas fa-graduation-cap"></i> {this.props.courseName}</p></a></td>
                        <td className="d-none d-sm-table-cell">{this.props.owner}</td>
                        <td className="d-none d-sm-table-cell">{this.props.lastModified}</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
         
      );
   }
}
export default App;