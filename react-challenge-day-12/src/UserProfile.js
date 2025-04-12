import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      timeOnline: 0,
    };
    this.timer = null;
  }

  // Called after component is mounted
  componentDidMount() {
    // Simulate fetching user data
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
      .then(res => res.json())
      .then(user => this.setState({ user }));

    // Start a timer
    this.timer = setInterval(() => {
      this.setState(prevState => ({ timeOnline: prevState.timeOnline + 1 }));
    }, 1000);
  }

  // Called when component updates
  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      // Refetch user data if the ID changes
      fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        .then(res => res.json())
        .then(user => this.setState({ user }));
    }
  }

  // Cleanup
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { user, timeOnline } = this.state;
    if (!user) return <p>Loading user...</p>;

    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>You've been viewing this profile for {timeOnline} seconds.</p>
      </div>
    );
  }
}

export default UserProfile;
