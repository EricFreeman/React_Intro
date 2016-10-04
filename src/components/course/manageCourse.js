//         this.state = {
//     course: {title: ''}
// };

// this.onTitleChange = (event) => {
//     const course = this.state.course;
//     course.title = event.target.value;
//     this.setState({course: course});
// };

// this.onClickSave = () => {
//     this.props.actions.createCourse(this.state.course);
//     this.setState({course: {title:''}});
// };
        
//         <h2>Add Course</h2>
//         <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
//         <input type="submit" onClick={this.onClickSave} value="Save" />