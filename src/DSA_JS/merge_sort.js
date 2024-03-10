function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }
    
    let center = Math.floor(arr.length/2);
    let left = arr.slice(0,center);
    let right = arr.slice(center);
    
        return merge(mergeSort(left), mergeSort(right))
    }
    
    function merge(left, right) {
        let result =[];
        while(left.length && right.length){
            if(left[0] < right[0]){
                result.push(left.shift());
            }else if(right[0] < left[0]){
                result.push(right.shift());
            }
        }
        
        return [...result, ...left, ...right];
    
    }
    