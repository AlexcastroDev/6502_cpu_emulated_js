import test from 'node:test';
import CPU from '../src/CPU.js';
import { strictEqual } from 'node:assert';
import Memory from '../src/Memory.js';
import instructions from '../src/instructions.js';

test('Should instance CPU Reseted', t => {
    const cpu = new CPU(new Memory())
    strictEqual(cpu.PC === 0xFFFC, true)
    strictEqual(cpu.SP === 0x0100, true)

    strictEqual(cpu.A === 0x00, true)
    strictEqual(cpu.X === 0x00, true)
    strictEqual(cpu.Y === 0x00, true)

    strictEqual(cpu.C === 0x00, true)
    strictEqual(cpu.Z === 0x00, true)
    strictEqual(cpu.I === 0x00, true)
    strictEqual(cpu.D === 0x00, true)
    strictEqual(cpu.B === 0x00, true)
    strictEqual(cpu.V === 0x00, true)
    strictEqual(cpu.N === 0x00, true)
})

test('Should Check memory', t => {
    const cpu = new CPU(new Memory())
    strictEqual(typeof cpu.Memory, 'object')
})

test('Should Check execute - LDA_INST_IM', t => {
    const cpu = new CPU(new Memory())
    
    cpu.Memory.Byte[0xFFFC] = instructions.LDA_INST_IM.opcode
    cpu.Memory.Byte[0xFFFD] = 0x42

    cpu.execute(instructions.LDA_INST_IM.cycles)

    strictEqual(cpu.A === 0x42, true)
})

// TODO: NOT WORKING YET
// test('Should Check execute - LDA_INST_ZP', t => {
//     const cpu = new CPU(new Memory())
    
//     cpu.Memory.Byte[0xFFFC] = instructions.LDA_INST_ZP.opcode
//     cpu.Memory.Byte[0xFFFD] = 0x42
//     cpu.Memory.Byte[0x0042] = 0x84

//     cpu.execute(instructions.LDA_INST_ZP.cycles)

//     strictEqual(cpu.A === 0x84, true)
// })