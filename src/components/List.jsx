var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = createReactClass({
    mixins:[Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
        return {ingredients:[], newItem: ""};
    },
    componentWillMount: function() {
        Actions.getIngredients();
    },
    onChange: function(event, ingredients) {
        this.setState({ingredients: ingredients});
    },
    onInputChange: function(e) {
        this.setState({newItem: e.target.value});
    },
    onClick: function(e) {
        if (this.state.newItem) {
            Actions.postIngredient(this.state.newItem);
        }

        this.setState({newItem: ""});
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (
            <div>
                <input
                placeholder="Add Item"
                value={this.state.newItem}
                onChange={this.onInputChange} />

                <button onClick={this.onClick}>Add Item</button>

                <ul>{listItems}</ul>
            </div>
        );
    }
});

module.exports = List;
