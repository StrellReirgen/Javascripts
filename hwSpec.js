//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    sum = 0;
    for (var i = 1; i <= n; i++){
        sum = sum + i;
    };
    return sum;    
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    sum = arr[0] + arr[arr.length - 1];
    return sum;
}

//fibonacci
function fibonacci(x){
    keep = [0,0];
    for (i = 0; i <= x; i++) {
        if (i >  1){
            sum = keep[0] + keep[1];
            keep[0] = keep[1];
            keep[1] = sum;

        } else {
            if (i == 1) {
                keep[1] = i;
            };
        }
    };
    return sum;

}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("fibonacci", function() { 
    it("should return 13 when we pass 7 as an argument", function() { 
        expect(fibonacci(7)).toEqual(13); 
    }); 
    it("should return 5 when we pass 5 as an argument", function() { 
        expect(fibonacci(5)).toEqual(5); 
    }); 
    it("should return 102334155 when we pass 40 as an argument", function() { 
        expect(fibonacci(40)).toEqual(102334155); 
    }); 
});