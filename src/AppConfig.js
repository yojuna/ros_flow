import TextUpdaterNode from './components/nodes/textBoxNode';
import initialNodes from './components/nodes/initialNodes.js';
import initialEdges from './components/edges/initialEdges.js';

const rfStyle = {
    backgroundColor: '#B8CEFF',
  };
  
const edgeOptions = {
    animated: true,
    style: {
      stroke: 'white',
    },
  };
  
const connectionLineStyle = { stroke: 'white' };
  
const minimapStyle = {
    height: 120,
  };
  
const panOnDrag = [1, 2];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };


export { rfStyle, edgeOptions, connectionLineStyle, minimapStyle, panOnDrag, nodeTypes, initialNodes, initialEdges };