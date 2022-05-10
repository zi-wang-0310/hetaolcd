// 在此处添加您的代码

//% weight=5 color=#2E8B57 icon="\uf3fc" block="显示屏"
namespace hetaolcd {

    //% blockId="hetao_lcd_show_string" block="显示字符串 %str| 在 行%y| 列%x|"
    export function showString(str:string, y:number, x:number) {
        let buf = Buffer.fromUTF8(str)
        let addrBuf = Buffer.create(1)
        addrBuf[0] = y * 16 + x
        pins.i2cWriteBuffer(9, addrBuf.concat(buf))
    }

    //% blockId="hetao_lcd_show_number" block="显示数字 %num| 在 行%y| 列%x|"
    export function showNumber(num: number, y: number, x: number) {
        let str = convertToText(num)
        let buf = Buffer.fromUTF8(str)
        let addrBuf = Buffer.create(1)
        addrBuf[0] = y * 16 + x
        pins.i2cWriteBuffer(9, addrBuf.concat(buf))
    }

    //% blockId="hetao_lcd_clear" block="清空屏幕"
    export function clear() {
        let str = ""
        for(let i = 0; i < 64; i++) {
            str += " "
        }
        let buf = Buffer.fromUTF8(str)
        let addrBuf = Buffer.create(1)
        addrBuf[0] = 0
        pins.i2cWriteBuffer(9, addrBuf.concat(buf))
    }
}