import UserGreeting from "./UserGreeting";

function App_cr(){
    return (
        <>
            <UserGreeting isLoggedIn={true} username="JuanDa"></UserGreeting>
        </>
    );
}

export default App_cr;