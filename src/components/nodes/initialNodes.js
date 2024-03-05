const initialNodes = [
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    {
      id: 'node-2',
      type: 'output',
      targetPosition: 'top',
      position: { x: 0, y: 130 },
      data: { label: 'node 2' },
    },
    {
      id: 'node-3',
      type: 'output',
      targetPosition: 'top',
      position: { x: 200, y: 200 },
      data: { label: 'node 3' },
    },
    {
        id: 'A',
        type: 'group',
        position: { x: -200, y: 0 },
        style: {
          width: 170,
          height: 140,
        },
      },
      {
        id: 'A-1',
        type: 'input',
        data: { label: 'Child Node 1' },
        position: { x: 10, y: 10 },
        parentNode: 'A',
        extent: 'parent',
      },
      {
        id: 'A-2',
        data: { label: 'Child Node 2' },
        position: { x: 10, y: 90 },
        parentNode: 'A',
        extent: 'parent',
      },
      {
        id: 'B',
        type: 'output',
        position: { x: -300, y: 200 },
        data: { label: 'Node B' },
      },
      {
        id: 'C',
        type: 'output',
        position: { x: -100, y: 200 },
        data: { label: 'Node C' },
      },
  ];

export default initialNodes;