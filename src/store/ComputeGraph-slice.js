import { createSlice } from '@reduxjs/toolkit';

const computeGraphSlice = createSlice({
  name: 'computeGraph',
  initialState: {
    tensors: [],
    clicked: 0,
    lastTensor: -1,
    xVals: [],
    predVals: [],
    trueVals: [],
    avgError: 1,
    iterations: 1,
    learningRate: 0.01,
    batchSize: 1,
    momentum: 0.9,
    edgesActive: false,
    dataset: '',
    predefinedModel: '',
    breakTraining: false,
    publisher_topic: '',
    publisher_queue_size: 10,
    publisher_msg_type: String,
  },
  reducers: {
    setInitialState(state, action) {
      return action.payload;
    },
    setPublisherTopic(state, action){
      state.publisher_topic = action.payload;
    },
    setPublisherQueueSize(state, action){
      state.publisher_queue_size = action.payload;
    },
    setPublisherMsgType(state, action){
      state.publisher_msg_type = action.payload;
    },
    setTensorNodes(state, action) {
      state.tensors = action.payload;
    },
    setClicked(state) {
      state.clicked = state.clicked + 1;
    },
    setLastTensor(state, action) {
      state.lastTensor = action.payload;
    },
    setXVals(state, action) {
      state.xVals = action.payload;
    },
    setPredVals(state, action) {
      state.predVals = action.payload;
    },
    setTrueVals(state, action) {
      state.trueVals = action.payload;
    },
    setAvgError(state, action) {
      state.avgError = action.payload;
    },
    setModelIterations(state, action) {
      state.iterations = action.payload;
    },
    setModelLearningRate(state, action) {
      state.learningRate = action.payload;
    },
    setModelMomentum(state, action) {
      state.momentum = action.payload;
    },
    setEdgesActive(state, action) {
      state.edgesActive = action.payload;
    },
    setDataSetName(state, action) {
      state.dataset = action.payload;
    },
    setBatchSize(state, action) {
      state.batchSize = action.payload;
    },
    setPredefinedModel(state, action) {
      state.predefinedModel = action.payload;
    },
    setBreakTraining(state, action) {
      state.breakTraining = action.payload;
    },
  },
});

export const computeGraphActions = computeGraphSlice.actions;
export default computeGraphSlice;
