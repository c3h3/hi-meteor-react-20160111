var {
    AppBar,
    LeftNav,
    RaisedButton,
    DatePicker
    } = MUI;



App = React.createClass({
    render: function() {
        return (
            <AppBar 
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more" />
        );
    }
});


// // App component - represents the whole app
// App = React.createClass({
  
  
//   // getTasks() {
//   //   return Tasks.find().fetch()
//   // },
//   // renderTasks() {
//   //   return this.getTasks().map((task) => {
//   //     return <Task key={task._id} task={task} />;
//   //   });
//   // },
  
//   mixins: [ReactMeteorData], 
//   getMeteorData() {
//     return {
//       tasks: Tasks.find({},{sort: {createdAt: -1}}).fetch()
//     }
//   },
//   renderTasks() {
//     return this.data.tasks.map((task) => {
//       return <Task key={task._id} task={task} />;
//     });
//   },

//   handleSubmit(event) {
//     event.preventDefault();
 
//     // Find the text field via the React ref
//     var text = React.findDOMNode(this.refs.textInput).value.trim();
//     var data = {
//       text: text,
//       createdAt: new Date() // current time
//     }
    
//     Meteor.call("leaveMessage", data)
 
//     // Clear form
//     React.findDOMNode(this.refs.textInput).value = "";
//   },
 
//   render() {
//     return (
//       <div className="container">
//         <header>
//           <h1>Todo List</h1>
//           <form className="new-task" onSubmit={this.handleSubmit} >
//             <input
//               type="text"
//               ref="textInput"
//               placeholder="Type to add new tasks" />
//           </form>
//         </header>
 
//         <ul>
//           {this.renderTasks()}
//         </ul>
//       </div>
//     );
//   }
// });


// import React from 'react';
// import AppBar from 'material-ui/lib/app-bar';
// import IconButton from 'material-ui/lib/icon-button';
// import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
// import IconMenu from 'material-ui/lib/menus/icon-menu';
// import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
// import MenuItem from 'material-ui/lib/menus/menu-item';

// const AppBarExampleIconMenu = () => (
//   <AppBar
//     title="Title"
//     iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//     iconElementRight={
//       <IconMenu
//         iconButtonElement={
//           <IconButton><MoreVertIcon /></IconButton>
//         }
//         targetOrigin={{horizontal: 'right', vertical: 'top'}}
//         anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//       >
//         <MenuItem primaryText="Refresh" />
//         <MenuItem primaryText="Help" />
//         <MenuItem primaryText="Sign out" />
//       </IconMenu>
//     }
//   />
// );

// export default AppBarExampleIconMenu;