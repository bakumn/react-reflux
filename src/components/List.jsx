var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

var List = createReactClass({
    getInitialState: function() {
        return {ingredients:[]};
    },
    componentWillMount: function() {
        HTTP.get('/ingredients')
        .then(function(data) {
            this.setState({ingredients: data});
        }.bind(this));
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
