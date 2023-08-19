import instructions from "./instructions.js"

export default class CPU {
    Byte = new Uint8Array()
    Word = new Uint32Array()
    Memory

    PC // Program Counter
    SP // Stack Pointer

    A // Accumulator
    X // Index Register X
    Y // Index Register Y

    C // Carry Flag
    Z // Zero Flag
    I // Interrupt Disable
    D // Decimal Mode
    B // Break Command
    V // Overflow Flag
    N // Negative Flag

    reset() {
        this.PC = 0xFFFC
        this.SP = 0x0100

        this.A = 0x00
        this.X = 0x00
        this.Y = 0x00

        this.C = 0x00
        this.Z = 0x00
        this.I = 0x00
        this.D = 0x00
        this.B = 0x00
        this.V = 0x00
        this.N = 0x00
        
        this.Memory.reset()
    }

    operator(address) {
        return this.Memory.Byte[address]
    }

    fetchByte() {
        const data = this.Memory.Byte[this.PC]
        this.PC++ // Move program counter to next byte
        this.Cycles--
        return data
    }

    readByte(address) {
        const data = this.Memory.Byte[address]
        this.Cycles--
        return data
    }

    ldaSetStatus() {
        // Set if A is zero
        this.Z = this.A === 0x00 ? 1 : 0
        // Set if bit 7 is set
        this.N = this.A & 0x80 ? 1 : 0
    }

    execute(Cycles) {
        this.Cycles = Cycles
        while (this.Cycles > 0) {
            const Instruction = this.fetchByte()
            switch (Instruction) {
                case instructions.LDA_INST_IM.opcode:
                    this.A = this.fetchByte()
                    this.ldaSetStatus()
                break;
                case instructions.LDA_INST_ZP.opcode:
                    const ZeroPageAddress = this.fetchByte()
                    this.A = this.readByte(ZeroPageAddress)
                    this.ldaSetStatus()
                break;
                case instructions.LDA_INST_ZPX.opcode:
                    const ZeroPageAddressX = this.fetchByte() + this.X
                    this.A = this.readByte(ZeroPageAddressX)
                    this.ldaSetStatus()
                break;
                default:
                    throw new Error(`Instruction not found: ${Instruction}`)
            }
        }
    }

    constructor(memory) {
        this.Memory = memory
        this.reset() // Reset CPU
    }
}
