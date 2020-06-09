import C from '../shared/opcodes';

class MasterController {
  execute(state, opcode) {
    const {
      stack: [x, y, z, t],
    } = state;

    switch (opcode) {
      case C.ADD:
        return { ...state, stack: [x + y, z, t, t] };
      default:
        // eslint-disable-next-line no-console
        console.log(`opcode not yet implemented: ${opcode}`);
        return state;
    }
  }
}

export default MasterController;
