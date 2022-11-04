function ipsBetween(start, end) {

    let IPLength = 4;
    let startIP = start.split(".");
    let endIP = end.split(".");
    let IPsBetween = 0;

    for (let i = 0; i < IPLength; i++) {
        IPsBetween += (endIP[i]-startIP[i])*(256 ** (IPLength-1-i));
    }

    return IPsBetween;
}