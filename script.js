// ==========================
// AI Engineering Workbench
// script.js
// ==========================

// ---------- Dashboard Metrics ----------

function updateMetrics() {

    document.getElementById("cpu").innerHTML =
        (15 + Math.random() * 20).toFixed(1) + "%";

    document.getElementById("memory").innerHTML =
        (30 + Math.random() * 25).toFixed(1) + "%";

    document.getElementById("latency").innerHTML =
        (1 + Math.random() * 2).toFixed(2) + " ms";

    document.getElementById("packets").innerHTML =
        Math.floor(820000 + Math.random() * 50000).toLocaleString();

}

setInterval(updateMetrics, 2000);

// ---------- Market Data ----------

const symbols = [
    {price:201.44,id:"aapl",change:"aaplchange"},
    {price:472.33,id:"msft",change:"msftchange"},
    {price:170.12,id:"nvda",change:"nvdachange"},
    {price:178.91,id:"goog",change:"googchange"},
    {price:329.88,id:"tsla",change:"tslachange"}
];

function updateMarket(){

    symbols.forEach(stock=>{

        stock.price += (Math.random()-0.5);

        document.getElementById(stock.id).innerHTML =
            stock.price.toFixed(2);

        let percent=(Math.random()*2-1).toFixed(2);

        let cell=document.getElementById(stock.change);

        if(percent>=0){

            cell.style.color="#22c55e";
            cell.innerHTML="▲ +" + percent + "%";

        }else{

            cell.style.color="#ef4444";
            cell.innerHTML="▼ " + percent + "%";

        }

    });

}

setInterval(updateMarket,1000);

// ---------- Chart ----------

const ctx=document.getElementById('latencyChart');

const latencyChart=new Chart(ctx,{

type:'line',

data:{

labels:["","","","","","","",""],

datasets:[{

label:"Latency (ms)",

data:[1.2,1.5,1.8,1.4,1.6,1.9,1.5,1.7],

borderColor:"#38bdf8",

backgroundColor:"rgba(56,189,248,0.2)",

tension:0.4,

fill:true

}]

},

options:{

responsive:true,

plugins:{

legend:{
labels:{
color:"white"
}
}

},

scales:{

x:{
ticks:{
color:"#9ca3af"
},
grid:{
color:"#243244"
}
},

y:{
ticks:{
color:"#9ca3af"
},
grid:{
color:"#243244"
}
}

}

}

});

// ---------- Animate Chart ----------

setInterval(()=>{

let data=latencyChart.data.datasets[0].data;

data.shift();

data.push((1+Math.random()*2).toFixed(2));

latencyChart.update();

},2000);

// ---------- AI Activity Feed ----------

const tasks=[

"AI generated Feed Handler",

"AI generated Unit Tests",

"AI analyzed Production Logs",

"AI reviewed C++ Code",

"AI suggested Architecture",

"AI generated Deployment Script",

"AI validated Configuration",

"AI optimized Performance"

];

setInterval(()=>{

const list=document.querySelector("ul");

const item=document.createElement("li");

item.innerHTML="✅ "+tasks[Math.floor(Math.random()*tasks.length)];

list.prepend(item);

if(list.children.length>6){

list.removeChild(list.lastChild);

}

},4000);