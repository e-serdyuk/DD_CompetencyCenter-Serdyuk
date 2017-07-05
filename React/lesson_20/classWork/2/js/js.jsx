
       class Hello extends React.Component {
    render() {
        var result;
        if (this.props.mode === "true") {
            result = this.props.one + this.props.two
        } 
        else {
            result = Number(this.props.one) + Number(this.props.two)
        }
        return (
            <h1>{result}</h1>
        );
    }
        }
        ReactDOM.render(
            <Hello one="4" two="3" mode="false" />,
            document.getElementById("root")
        )