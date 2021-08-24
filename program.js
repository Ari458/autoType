var write= document.querySelector('.write');
var click= document.querySelector('.click');

var i=0;
var text='এই মেয়েটা কি পাগল নাকি ? এমন পাগলামো কেউ করে নাকি? আমি ভেবে পাই না এই মেয়েটার মনে কি চলে ! এতো সিনেমাটিক হলে কি চলে নাকি ? আম নিশিকে বললাম -কি করছো তুমি ? এভাবে কেউ জড়িয়ে ধরে ? তাও আবার সবার সামনে ? নিশিতো আমাকে ছাড়লোই না বরং আরো একটু জোড়ে জড়িয়ে ধরলো । বলল -জানো এই কয় দিনে তোমাকে আমি কি পরিমান মিস করেছি ? আর তুমি তো মজা করে বেরিয়েছ ! -আরে বাবা ঘুড়তে গিয়েছিলাম । মাত্র তিন দিনের জন্য ! তোমাকে তো বলেছিলাম, নাকি ? এখন একটু ছাড়ো ! মানুষ জন কি ভাবছে ? আসলে মানুষ জন কি ভাবছে সেটা নিয়ে আম খুব একটা ভাবছি না আমি ভাবছি তন্নী |';
var j=text.length-1;



var erase= ()=>{
    console.log("j.erase="+j);
    if(j>=0){
        write.innerHTML = text.slice(0,j--);
        setTimeout(erase,100);
    } 
} 



var typing= ()=>{
    console.log("i.now="+i);
    if(i<text.length){
        write.innerHTML += text[i++];
        setTimeout(typing,100);
    }  
}



typing();
setInterval(erase,(text.length*100)+500);








