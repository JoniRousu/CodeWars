function narcissistic(value) {
    let number = value.toString();
    let power = number.length;
    let narc = 0;

    Array.from(number).forEach((digit) => {
        narc += (parseInt(digit) ** power);
    });

    return value === narc;
}
  