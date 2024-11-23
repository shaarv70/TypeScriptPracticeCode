let count:number=0;
function my(){
  
    if (count===7)
    {
        return ;
    } 
    console.log(6);
    count++;
    return my();
}
my();