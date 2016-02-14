//Require react when we need it
var React = require('react');
//Import a non npm module e.g. your own module
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text": "ham"},{"id":2, "text": "cheese"},{"id":3, "text": "turkey"}];

var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
