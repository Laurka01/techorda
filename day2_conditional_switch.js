function getLetter(s) {
    let letter;
    // Write your code here
    const aaa = ['a','e','i','o','u']
    if (aaa.includes(s[0])){
        letter = 'A'
    }
    const bbb = ['b','c','d','f','g']
    if (bbb.includes(s[0])){
        letter = 'B'
    }
    const hhh = ['h','j','k','l','m']
    if (hhh.includes(s[0])){
        letter = 'C'
    }
    const nnn = ['n','p','q','r','s','t','v','w','x','y','z']
    if (nnn.includes(s[0])){
        letter = 'D'
    }

    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}