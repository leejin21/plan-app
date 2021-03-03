import logo from "./logo.svg";
// import "./App.css";
import "./App.scss";
import TodoList from "./components/TodoList";
import Times from "./components/Times";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="logo-txt">J:PLAN</p>
                </div>
                <p className="login">로그인</p>
            </header>
            <div className="App-Content">
                <Times />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
