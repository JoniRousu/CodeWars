# Last Digit Of A Large Number

Define a function that takes in two non-negative integers `$a$` and `$b$` and returns the last decimal digit of `$a^b$`. Note that `$a$` and `$b$` may be very large!

For example, the last decimal digit of `$9^7$` is `$9$`, since `$9^7 = 4782969$`.  The last decimal digit of `$({2^{200}})^{2^{300}}$`, which has over `$10^{92}$` decimal digits, is `$6$`.  Also, please take `$0^0$` to be `$1$`.

You may assume that the input will always be valid.

## Examples

```javascript
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
```

___

## Remarks

### JavaScript, C++, R, PureScript, COBOL

Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

***

[Link to Kata](https://www.codewars.com/kata/5511b2f550906349a70004e1/javascript)