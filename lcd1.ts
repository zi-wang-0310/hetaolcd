// 在此处添加您的代码
enum HetaoLcdChinese {
    //% block="温度"
    temperature = 0,
    //% block="湿度"
    humidity = 1,
    //% block="量子兔"
    quantumRabbit = 2,
    //% block="智能"
    intelligence = 3,
    //% block="显示"
    show = 4,
    //% block="°C"
    centigrade = 11,
    //% block="%rh"
    relativeHumidity = 12,
    //% block="年"
    year = 5,
    //% block="月"
    month = 6,
    //% block="日"
    day = 7,
    //% block="时"
    hour = 8,
    //% block="分"
    minute = 9,
    //% block="秒"
    second = 10,
}

//% weight=5 color=#2E8B57 icon="\uf26c" block="显示屏"
namespace hetaolcd {

    // 温度, 湿度, 量子兔, 智能, 显示, 年, 月, 日, 时, 分, 秒
    const chineseEnumCode: uint8[][] = [
        [0, 8, 67, 252, 50, 8, 18, 8, 131, 248, 98, 8, 34, 8, 11, 248, 16, 0, 39, 252, 228, 164, 36, 164, 36, 164, 36, 164, 47, 254, 32, 0,
            1, 0, 0, 132, 63, 254, 34, 32, 34, 40, 63, 252, 34, 32, 35, 224, 32, 0, 47, 240, 34, 32, 33, 64, 32, 128, 67, 96, 140, 30, 48, 4],
        [0, 8, 71, 252, 52, 8, 20, 8, 135, 248, 100, 8, 36, 8, 15, 248, 17, 32, 33, 32, 233, 36, 37, 40, 35, 48, 33, 36, 63, 254, 32, 0,
            1, 0, 0, 132, 63, 254, 34, 32, 34, 40, 63, 252, 34, 32, 35, 224, 32, 0, 47, 240, 34, 32, 33, 64, 32, 128, 67, 96, 140, 30, 48, 4],
        [0, 16, 31, 248, 16, 16, 31, 240, 16, 20, 255, 254, 0, 0, 31, 240, 17, 16, 31, 240, 17, 16, 31, 240, 1, 0, 31, 240, 1, 0, 127, 252,
            0, 0, 63, 240, 0, 16, 0, 32, 0, 64, 1, 128, 1, 4, 255, 254, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 2, 0,
            8, 0, 15, 224, 16, 64, 32, 136, 127, 252, 161, 8, 33, 8, 33, 8, 63, 248, 34, 136, 2, 160, 4, 144, 4, 146, 8, 130, 16, 126, 96, 0],
        [32, 0, 34, 4, 63, 126, 72, 68, 8, 68, 255, 196, 16, 68, 20, 124, 34, 68, 66, 16, 159, 248, 16, 16, 31, 240, 16, 16, 31, 240, 16, 16,
            16, 128, 16, 136, 36, 152, 68, 160, 254, 192, 2, 132, 124, 132, 68, 124, 124, 0, 68, 136, 68, 152, 124, 160, 68, 192, 68, 130, 84, 130, 72, 126],
        [0, 16, 31, 248, 16, 16, 16, 16, 31, 240, 16, 16, 16, 16, 31, 240, 20, 80, 68, 68, 52, 76, 20, 80, 4, 64, 4, 68, 255, 254, 0, 0,
            0, 16, 63, 248, 0, 0, 0, 0, 0, 0, 0, 4, 255, 254, 1, 0, 1, 0, 9, 32, 25, 24, 33, 12, 65, 4, 1, 0, 5, 0, 2, 0],
        [8, 0, 8, 8, 31, 252, 17, 0, 33, 0, 65, 16, 31, 248, 17, 0, 17, 0, 17, 4, 255, 254, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 16, 15, 248, 8, 16, 8, 16, 8, 16, 15, 240, 8, 16, 8, 16, 8, 16, 15, 240, 8, 16, 8, 16, 16, 16, 16, 16, 32, 80, 64, 32],
        [0, 16, 31, 248, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 31, 240, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 31, 240, 16, 16, 0, 0],
        [0, 8, 4, 8, 126, 8, 68, 8, 71, 254, 68, 8, 68, 8, 124, 136, 68, 72, 68, 72, 68, 8, 68, 8, 124, 8, 68, 72, 0, 40, 0, 16],
        [0, 128, 4, 128, 4, 64, 8, 64, 8, 32, 16, 16, 32, 8, 79, 238, 132, 36, 4, 32, 4, 32, 4, 32, 4, 32, 8, 32, 17, 64, 32, 128],
        [4, 32, 14, 32, 120, 32, 8, 32, 8, 168, 254, 166, 8, 162, 29, 32, 26, 36, 40, 36, 40, 40, 72, 16, 136, 32, 8, 64, 8, 128, 11, 0]
    ]

    const keyP: uint8[] = [0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01];

    //% blockId="hetao_lcd_show_string" block="显示字符串 %str| 在 行%y| 列%x|"
    export function showString(str: string, y: number, x: number) {
        let buf = Buffer.fromUTF8(str)
        let addrBuf = Buffer.create(1)
        addrBuf[0] = y * 16 + x
        pins.i2cWriteBuffer(9, addrBuf.concat(buf))
    }

    //% blockId="hetao_lcd_show_chinese_string" block="显示%str| 在 行%y| 列%x|"
    export function showChineseString(strChinese: HetaoLcdChinese, y: number, x: number) {
        if (strChinese < 11) {
            let addrBuf1 = Buffer.create(1)
            addrBuf1[0] = 64 + y * 16 + 0
            addrBuf1 = addrBuf1.concat(Buffer.fromArray(chineseEnumCode[strChinese]))
            pins.i2cWriteBuffer(9, addrBuf1)
            console.log(strChinese.toString())
            for (let k = 0; k < 16; k++) {
                let ps = ""
                for (let j = 0; j < 2; j++) {
                    for (let m = 0; m < 8; m++) {
                        let flag = chineseEnumCode[strChinese][k * 2 + j] & keyP[m];
                        if (flag) {
                            ps += "● "
                        }
                        else {
                            ps += "○ "
                        }
                    }
                }
                console.log(ps)
            }
            console.log("---------")
        } else {
            let str = ""
            if (strChinese == HetaoLcdChinese.centigrade) {
                str = "°C"
            } else {
                str = "%rh"
            }
            let buf = Buffer.fromUTF8(str)
            let addrBuf = Buffer.create(1)
            addrBuf[0] = y * 16 + x
            pins.i2cWriteBuffer(9, addrBuf.concat(buf))
        }
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
        for (let i = 0; i < 64; i++) {
            str += " "
        }
        let buf = Buffer.fromUTF8(str)
        let addrBuf = Buffer.create(1)
        addrBuf[0] = 0
        pins.i2cWriteBuffer(9, addrBuf.concat(buf))
    }
}
