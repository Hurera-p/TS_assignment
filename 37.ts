// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string = "large",txt:string= "I love typescript" ) {
    console.log("Size of T-shirt = ", size);
    console.log("Print on T-shirt = ",txt); 
    
    }
    
    
make_shirt();
make_shirt("medium");
make_shirt("small", "Success == Smart work"); 
    
    

