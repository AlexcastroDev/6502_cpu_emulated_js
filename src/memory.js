export default class Memory {
    MAX_MEMORY = new Uint32Array(1024 * 64) // 64KB
    Byte = new Uint8Array(this.MAX_MEMORY.buffer)

    reset() {
        this.MAX_MEMORY.fill(0)
    }
}