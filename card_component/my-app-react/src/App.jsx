import App_card from './App_card'
import App_list from './App_list'
import App_counter from './App_counter'
import App_color_picker from './App_color_picker'
import App_onchange from './App_onchange'

function App(){
    return (
    <>
    <h1>Learning <span style={{ color: '#D85A30' }}>Log</span></h1>
    <App_card/>
    <App_list/>
    <App_counter/>
    <App_onchange/>
    <App_color_picker/>
    </>
    );
}

export default App