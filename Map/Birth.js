let myMap=new Map();
for(let i=1;i<=50;i++)
{
    let data1=Math.floor(Math.random()*13);
    if(myMap.has(data1))
    {
         let data2=myMap.get(data1)+`,${i}`;//store the data of month
          myMap.set(data1,data2);
    }else{
        myMap.set(data1,`${i}`);
    }
}

for(let i=1;i<=12;i++)
{
 console.log(i,"-",myMap.get(i))   //printing individuals birthday months in comman
}