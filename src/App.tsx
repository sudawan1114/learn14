import React from 'react';
import './App.css';

function App() {
  
var engine = new Engine(canvas, true);
          var scene = new Scene(engine);

          var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
          camera.attachControl(canvas, true);
          var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
          var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

          // hide/show the Inspector
  //         window.addEventListener("keydown", (ev) => {
  //                     // Shift+Ctrl+Alt+I
  //                                 if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
  //                                                 if (scene.debugLayer.isVisible()) {
  //                                                                     scene.debugLayer.hide();
  //                                                                                     } else {
  //                                                                                                         scene.debugLayer.show();
  //                                                                                                                         }
  //                                                                                                                                     }
  //                                                                                                                                             });
  //
  //                                                                                                                                                     // run the main render loop
  //                                                                                                                                                             engine.runRenderLoop(() => {
  //                                                                                                                                                                         scene.render();
  //                                                                                                                                                                                 });kkreturn (
    <>
<canvas id="gameCanvas"></canvas>
    </>
  );
}

export default App;
