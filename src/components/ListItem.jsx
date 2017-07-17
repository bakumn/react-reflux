var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = createReactClass({
    render: function() {
        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        );
    }
});

module.exports = ListItem;
