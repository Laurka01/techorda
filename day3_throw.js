function isPositive(a) {
    let result = 'YES';
  
    if (a < 0) {
      throw { message: 'Negative Error' };
    } else if (a === 0) {
      throw { message: 'Zero Error' };
    }
  
    return result;
  }
  
  function main() {
      const n = +(readLine());
      
      for (let i = 0; i < n; i++) {
          const a = +(readLine());
        
          try {
              console.log(isPositive(a));
          } catch (e) {
              console.log(e.message);
          }
      }
  }