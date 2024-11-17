

//ES6 const, let
//ES6 Destructuring 
const { Component } = React;

class ListItem extends Component {
    /* TODO: WRITE YOUR CODE HERE */
    render() {
        const {item, onDelete} = this.props;
        return (
        <li>
            {item}
            <button onClick={onDelete}>Delete</button>
        </li>
        );
    }
}

interface LState {
    items: string[];
    inputValue: string;
}

class List extends Component<{}, LState> {
    /* TODO: WRITE YOUR CODE HERE */
    state: LState = {
        items: [],
        inputValue: '',
    };

    handleChange = ({target: {value}}) => {
        this.setState({inputValue: value});
    };

    handleAdd = () => {
        this.setState(({items, inputValue}) => ({
        items: [...items, inputValue],
        inputValue: '',
        }));
    };

    handleDelete = (index) => {
        this.setState(({items}) => {
            const updatedItems = items.filter((_, i) => i !== index);
            return {items: updatedItems};
        });
    };

    render() {
        const {items, inputValue} = this.state;
        return (
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            />
            <button
            onClick={this.handleAdd}
            disabled={!inputValue.trim()}
            >
            Submit
            </button>
            <ul>
            {items.map((item, index) => (
                <ListItem
                key={index}
                item={item}
                onDelete={() => this.handleDelete(index)}
                />
            ))}
            </ul>
        </div>
        );
    }
}

class App extends Component {
	render(){
		return (
			<div>
				<List>
				</List>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".root"));