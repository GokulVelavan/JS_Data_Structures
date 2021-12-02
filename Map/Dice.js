let Mymap=new Map();
let decide=true;
let minimum=1000;
let index;
while(decide){
    let data1=Math.floor(Math.random()*7);//rol dice between 1 to 6
    if(Mymap.has(data1))//verifying before its present or not
    {
        let data2=Mymap.get(data1)+1;
        Mymap.set(data1,data2);
      console.log("key",data1,"value",data2)
          
    }else{
         Mymap.set(data1,1);
    }


 if(Mymap.get(data1)==10)//exit condition
 {
     console.log("Maximim",data1)
     decide=false;
 }
}

for(let i=1;i<7;i++)//iterating through find the minimum
{
let data2=Mymap.get(i)
if(data2<minimum)
{
    minimum=data2;
    index=i;
}

}
console.log("Minimum",index)
