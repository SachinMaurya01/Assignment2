// Solution 1--->

const digitgeneration = (num) => {
    let str = String(num);
    let count = 0;
    let ans;
    for (let i = 0; i < str.length - 1; i++) {
        if (parseInt(str[i]) >= parseInt(str[i + 1])) {
            ans = " not valid";
            break;
        }
        else {
            count++;
        }
    }
    return (ans) ? ans : count;
}
console.log(digitgeneration(189));


//Solution 2--->

function generateSteps(num1, num2) {
    const steps = {};
    let carry = 0;

    const digits1 = String(num1).split('').map(Number).reverse();
    const digits2 = String(num2).split('').map(Number).reverse();
    const maxLength = Math.max(digits1.length, digits2.length);
    digits1.length = maxLength;
    digits2.length = maxLength;

    for (let i = 0; i < maxLength; i++) {
        const digit1 = digits1[i] || 0;
        const digit2 = digits2[i] || 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        steps[`step ${i + 1}`] = { carry: carry, sum: sum % 10 };
    }

    if (carry > 0) {
        steps.push({
            sum: carry,
            carry: 0
        });
    }

    return steps;
}

const steps = generateSteps(1489, 714);
console.log(steps);