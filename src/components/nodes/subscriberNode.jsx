import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Typography from '@mui/material/Typography';

const handleStyle = { left: 10 };

function rosSubscriberNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="ros-subscriber-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Typography
            color="grey.500"
            padding="1px"
            margin="1px"
            fontSize="12px"
          >
            <strong>Subscriber</strong>
      </Typography>
      <div>
        <label htmlFor="text">topic:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">queue_size:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" defaultValue={'10'}/>
      </div>
      <div>
        <label htmlFor="text">msg_type:</label>
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