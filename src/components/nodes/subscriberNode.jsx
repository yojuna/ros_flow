import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function rosSubscriberNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="ros-subscriber-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">Topic:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">Queue Size:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" defaultValue={'10'}/>
      </div>
      <div>
        <label htmlFor="text">Msg Type:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" defaultValue={'string'}/>
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} /> */}
    </div>
  );
}

export default rosSubscriberNode;