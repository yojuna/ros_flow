const initialNodes = [
    // { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: 'sub_1', type: 'rosSubscriber', position: { x: 350, y: 0 }},
    { id: 'sub_2', type: 'rosSubscriber', position: { x: 300, y: 200 }},
    { id: 'pub_1', type: 'rosPublisher', position: { x: -500, y: 0 }},

    // {
    //   id: 'node-2',
    //   type: 'output',
    //   targetPosition: 'top',
    //   position: { x: 0, y: 130 },
    //   data: { label: 'node 2' },
    // },
    // {
    //   id: 'node-3',
    //   type: 'output',
    //   targetPosition: 'top',
    //   position: { x: 200, y: 200 },
    //   data: { label: 'node 3' },
    // },
    {
        id: 'A',
        type: 'group',
        position: { x: -200, y: 0 },
        style: {
          width: 220,
          height: 420,
        },
      },
      {
        id: 'A-sub_3',
        type: 'rosSubscriber',
        data: { label: 'Subscriber' },
        position: { x: 10, y: 10 },
        parentNode: 'A',
        extent: 'parent',
      },
      {
        id: 'A-pub_2',
        type: 'rosPublisher',
        data: { label: 'Publisher' },
        position: { x: 10, y: 200 },
        parentNode: 'A',
        extent: 'parent',
      },
    //   {
    //     id: 'B',
    //     type: 'output',
    //     position: { x: -300, y: 200 },
    //     data: { label: 'Node B' },
    //   },
    //   {
    //     id: 'C',
    //     type: 'output',
    //     position: { x: -100, y: 200 },
    //     data: { label: 'Node C' },
    //   },
  ];

export default initialNodes;