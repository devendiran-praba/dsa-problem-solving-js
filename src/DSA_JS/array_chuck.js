// function chunk(array, size) {
//     let arr = [];
    
//     for(let i=0;i<array.length; i+=size)
//     {
//         arr.push(array.slice(i, size+i))
//     }
//     console.log(arr[0])
// return arr
// }

function chunk(array, size) {
    const chunked = [];
    for (let element of array) {
      const last = chunked[chunked.length - 1];
      console.log(last)
                  console.log('fffff',last,size,element)
  
      if (!last || last.length === size) {
              console.log('kkkkk',[element])
  
        chunked.push([element]);
                    console.log('cccc',chunked)
  
      } else {
        last.push(element);
      }
    }
    return chunked;
  }