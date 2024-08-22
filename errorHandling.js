try{    
    console.log("try block starts here");
    //error -> reference error
    console.log(x);
    console.log("try block ends here")

}
catch(err) {
    //define krte h, error k sath aap kya krna chahte h 
    //retry logic //fallback mechanism //logging
    //custom error
    console.log("I AM INSIDE CATCH BLOCK")
    console.log("Your error is here: ", err );
}
finally{
    console.log("I will run everytime, as i am finally block")
}
