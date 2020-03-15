// Render methods can return component instances.

// A component class that returns some JSX in its render method
class OMG extends React.Component {
    render() {
        return <h1>Whooaa!</h1>;
    }
}

// A component class that retuns an instance of the above class in its render method
class Crazy extends React.Component {
    render() {
      return <OMG />;
    }
}

// It's a component that's rendered by another component!
