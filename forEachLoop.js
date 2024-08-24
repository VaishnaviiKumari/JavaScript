// example 1
        let list = [1,2,3,4,5,6,7];

        list.forEach(function(number,index){
            console.log(`Element at ${index} : ${number}`)
        })
        
// example 2
        let numbers = [1,2,3,4,5,6,7];

        let sum = 0;
        numbers.forEach(function(number){
            sum+=number;
        })

        console.log(sum);   // 28
