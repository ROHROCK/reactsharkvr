// import "@google/model-viewer"
// import ModelViewer from 'react-model-viewer';

// let h = "Horse.glb";
function App() {
  return (
    <div className="App">
      <h1>Astronaut</h1>

    <div id="model" styles={{height:"500px",width:"500px"}}>
        <model-viewer  src="assest/Astronaut.glb" alt="A 3D model of a robot" auto-rotate camera-controls background-color="#455A64"/>
    </div>
    </div>
  );
}

export default App;
