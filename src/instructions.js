const instructions = {
    // LDA immediate mode -- addressing mode #1
    LDA_INST_IM: {
        cycles: 2,
        opcode: 0xA9,
    },
    // LDA zero page -- addressing mode #2
    LDA_INST_ZP: {
        cycles: 3,
        opcode: 0xA5,
    },
    // LDA zero page, X -- addressing mode #3
    LDA_INST_ZPX: {
        cycles: 4,
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