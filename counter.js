function Counter(){
    return {
      count : 0,
      increment(){
          if(this.count < this.maxValue){
            this.count++;
          }
          else{
             alert("You've reached maximum value" )
          };

      },
      decrement(){
        if(this.count >0 ){
          this.count--;
        }else {
          alert("The count cannot be decreased further.");
        };
        
      },
      maxValue: 30,
      
      reset(){
        this.count=0;
      },
      
    }
}
document.addEventListener('alpine:init',()=>{
    Alpine.data('counter',Counter)
})