var fibonacci = (function() {
    
    var fibTerms = [0,1];

    return function(n) {
        if (fibTerms[n] == undefined) {
            fibTerms.push(fibonacci(n-1) + fibonacci(n-2));
        }
        return fibTerms[n];
    };
})();