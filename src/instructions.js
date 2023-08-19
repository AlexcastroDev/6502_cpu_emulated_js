const instructions = {
    // LDA immediate mode -- addressing mode #1
    // An instruction using immediate addressing mode has
    // constant value or the address of the operand as part of the instruction.
    // For example, the instruction LDA #$01 would load the accumulator with
    // the value hex 01 (decimal 1). Likewise LDA #$FF would load the accumulator
    // with the value hex FF (decimal -1).
    // An assembler will always generate the shortest form of immediate mode
    // (e.g. LDA #$01) even if the operand can be expressed as a larger number
    // (e.g. LDA #$0001). The reason for this is that the 6502 processor only
    // supports 8 bit immediate mode so the assembler is just being safe.
    LDA_INST_IM: {
        cycles: 2,
        opcode: 0xA9,
    },
    // LDA zero page -- addressing mode #2
    // An instruction using zero page addressing 
    // mode has only an 8 bit address operand. 
    // This limits it to addressing only the first 256 bytes of memory 
    // (e.g. $0000 to $00FF) where the most significant byte of the address is always zero. 
    // In zero page mode only the least significant byte of the address is held in 
    // the instruction making it shorter by one byte (important for space saving) 
    // and one less memory fetch during execution (important for speed).
    // An assembler will automatically select zero page addressing 
    // mode if the operand evaluates to a zero page address and 
    // the instruction supports the mode (not all do).
    LDA_INST_ZP: {
        cycles: 3,
        opcode: 0xA5, // 165
    },
    // LDA zero page, X -- addressing mode #3
    // An instruction using zero page, X addressing
    // mode has only an 8 bit address operand.
    // This limits it to addressing only the first 256 bytes of memory
    // (e.g. $0000 to $00FF) where the most significant byte of the address is always zero.
    // In zero page mode only the least significant byte of the address is held in
    // the instruction making it shorter by one byte (important for space saving)
    // and one less memory fetch during execution (important for speed).
    // An assembler will automatically select zero page addressing
    // mode if the operand evaluates to a zero page address and
    // the instruction supports the mode (not all do).
    LDA_INST_ZPX: {
        cycles: 4,
        opcode: 0xB5, // 181
    },
    // LDA absolute -- addressing mode #4
    LDA_INST_ABS: {
        cycles: 4,
    },
    // LDA absolute, X -- addressing mode #5
    LDA_INST_ABSX: {
        cycles: 4,
    },
    // LDA absolute, Y -- addressing mode #6
    LDA_INST_ABSY: {
        cycles: 4,
    },
    // LDA (indirect, X) -- addressing mode #7
    LDA_INST_INDX: {
        cycles: 6,
    },
    // LDA (indirect), Y -- addressing mode #8
    LDA_INST_INDY: {
        cycles: 5,
    },
}

export default instructions