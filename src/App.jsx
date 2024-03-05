import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyEdgeChanges,
  applyNodeChanges,
  SelectionMode
} from 'reactflow';
import { rfStyle, edgeOptions, connectionLineStyle, minimapStyle, panOnDrag, nodeTypes, initialEdges, initialNodes } from './AppConfig.js'
import 'reactflow/dist/style.css';
import './styles/textBox.css';

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      defaultEdgeOptions={edgeOptions}
      connectionLineStyle={connectionLineStyle}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
      panOnScroll
      selectionOnDrag
      panOnDrag={panOnDrag}
      selectionMode={SelectionMode.Partial}>

      <Background />
      <Controls />
      <MiniMap style={minimapStyle} zoomable pannable />
    </ReactFlow>
  );
}

export default Flow;
