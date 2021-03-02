import logo from "./logo.svg";
// import "./App.css";
import "./App.scss";

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
            <div className="Content">
                <p className="Times">여기는 채워지는 시간표</p>
                <p className="TDL">여기는 tdl+스톱워치 기능</p>
            </div>
        </div>
    );
}

export default App;
