function vowelsAndConsonants(s) {
    let letter;
    // Write your code here
    const aaa = ['a','e','i','o','u']
    for (let i = 0; i < s.length; i++) {
        if (aaa.includes(s[i])){
            console.log(s[i])
        }
        else {
            continue
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!aaa.includes(s[i])){
            console.log(s[i])
        }
        else {
            continue
        }
    }
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}