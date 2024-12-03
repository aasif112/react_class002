



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Wellcome to Basic React App</p>  
      <br />
      <hr />
      <h2>Starting React</h2>
      <p>First Install NodeJS and npm</p>
      <p>Check NodeJS and npm</p>
      <code>node -v</code>
      <code>npm -v</code>
      <div>
        <p>Start Installing React by following commands:</p>
        <ul>
          <li><h3>Installing npm package</h3></li>
          <p>Here first install rect-app package in the dirctory. </p>
          <code>npm install -g create-react-app</code>
          <p>Then install the basic react app</p>
          <code>create-react-app project-name</code>
          <p>A folder of project-name will be created with basic react app in it.</p>
          <p>Go to directory project-name the run the react-app by</p>
          <code>npm start</code>
          <p>This will launch a new development server in local system</p>
          <p>A new browser window will open with react App running at <strong> http://localhost:3000/</strong> </p>
          <p>This will detect and update any changes made.</p>

          <li><h3>Directly Downloading React-App with npx</h3></li>
          <p>Here we will install react-app without downloading npm create-react-app package.</p>
          <code>npx create-react-app my-project</code>
          <p>A folder of  my-project will be created with basic react app in it.</p>
          <p>Rest is the same with yarn command.</p>
          <code>yarn start</code>
        </ul>
        <h3>Make a build</h3>
        <p>make a new optimised / developed index.html to deploy on server.</p>
        <code>yarn build</code>
        <p>This will create a new directory in the folder with name <strong>build</strong></p>
        <p>It contain index.html to be deployed on server.</p>
      </div>
    </div>

  );
}

export default App;
