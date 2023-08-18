const ReduxContext = React.createContext("store");

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
	class Connect extends React.Component {
		constructor(props) {
			super(props);
			this.state = props.store.getState();
		}

		componentDidMount() {
			this.props.store.subscribe((state) => {
				this.setState(state);
			});
		}

		render() {
			<Component
				{...props}
				{...mapStateToProps(this.props.store.getState())}
				{...mapDispatchToProps(this.props.store.dispatch)}
			/>;
		}
	}

	return (props) => {
		<ReduxContext.Consumer>
			{(store) => <Connect {...props} store={store}></Connect>}
		</ReduxContext.Consumer>;
	};
};
