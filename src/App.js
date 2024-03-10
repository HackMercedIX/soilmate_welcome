import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome Page</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  .container {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;
  }
  h1 {
    font-size: 3em;
    color: #333;
  }
  p {
    font-size: 1.2em;
    color: #666;
    margin-top: 20px;
  }
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2em;
    margin-top: 20px;
    transition: background-color 0.3s;
  }
  .button:hover {
    background-color: #0056b3;
  }
</style>
</head>
<body>

<div class="container">
  <h1>Welcome to Our Website</h1>
  <p>We're glad you're here!</p>
  <a href="#" class="button">Get Started</a>
</div>

</body>
</html>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
