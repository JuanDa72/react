function UserGreeting(props){

        if (props.isLoggedIn) {
            return <h2>Welcome back, {props.username}!</h2>;
        }

        else{
            return (<h2>Please log in to continue.</h2>)
        }
    
}

export default UserGreeting;