buf = [0, 1, 0]
i = 1
str2 = convert_to_text(123)
buf[0] = 1
while i <= len(str2):
    buf[i] = str2.char_code_at(i)
    break
    i += 1
pins.i2c_write_buffer(9, buf)