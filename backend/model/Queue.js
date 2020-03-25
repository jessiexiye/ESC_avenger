class Queue{
    constructor(){
        this.items=[]
        this.limit=0;
        
    }
    enqueue(element){
        if(this.items.length <= this.limit){
            this.items.push(element);
            return true;
        }
        else{
            return false
        }
    }
    dequeue(){
        if(this.isEmpty()) {
            return null; 
        }
        this.items.shift();
    }
    front() {  
        if(this.isEmpty()) {
            console.log("No Element in the queue")
            return "Null"; 
        }
        return this.items[0]; 
    }
    isEmpty(){
        return this.items.length == 0; 
    }
    addLimit(number_of_agent){
        this.limit=this.limit+(number_of_agent*10)
    }
    currentLimit(){
        return this.limit
    }
    emptyslots(){
        return (this.limit-this.items.length);
    }
    getallitem(){
        return this.items;
    }
    removeItem(user){
        let user_index = this.items.indexOf(user);
        this.items.splice(user_index, 1);
    }
    
    
}

module.exports= Queue;