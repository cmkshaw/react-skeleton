//Require react when we need it
var React = require('react');

//Create a list item component
var ListItem = React.createClass({
  render: function(){
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
});

//Export it, so you can require it elsewhere
module.exports = ListItem;
