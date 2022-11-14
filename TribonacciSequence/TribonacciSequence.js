function tribonacci(signature,n) {
    let sequence = n > 0 ? signature.slice(0, n) : [];
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length-3]+sequence[sequence.length-2]+sequence[sequence.length-1])
    }
    return sequence;
}