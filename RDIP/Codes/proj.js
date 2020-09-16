var array1=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
            ["some students like to study in the night","at night some students like to study"],
            ["John and Mary went to church","Mary and John went to church"],
            ["John went to church after eating","after eating John went to church","John after eating went to church"],
            ["did he go to market","he did go to market"],
            ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
            ["John goes to the library and studies","John studies and goes to the library"],
            ["John ate an apple so did she","she ate an apple so did John"],
            ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
            ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]
        ];
var array2=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
            ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
            ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
            ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
            ["क्या वो बाजार गया","वो क्या बाजार गया","क्या बाजार वो गया","वो बाजार क्या गया","बाजार क्या वो गया","बाजार वो क्या गया","क्या वो गया बाजार","वो क्या गया बाजार","क्या गया वो बाजार","वो गया क्या बाजार","गया क्या वो बाजार","गया वो क्या बाजार","गया क्या बाजार वो","क्या गया बाजार वो","गया बाजार क्या वो","क्या बाजार गया वो","बाजार गया क्या वो","बाजार गया क्या वो","वो बाजार गया क्या","बाजार वो गया क्या","बाजार गया वो क्या","वो गया बाजार क्या","गया वो बाजार क्या","गया बाजार वो क्या"],
            ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
            ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
            ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
        ];
function array()
{
    var strUser=document.getElementById("ar").value=="English";
    if(strUser)
    {
      document.getElementById("r").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
      document.getElementById("s").innerHTML="(select the buttons in proper order)";
      final=array1;
    }
    else
    {
      document.getElementById("r").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
      document.getElementById("s").innerHTML="(select the buttons in proper order)";
      final=array2;
    }
    index=Math.floor(Math.random()*final.length);
    sentence=final[index][0];
    words=sentence.split(" ");

    for(i=0;i<words.length;i++)
    {
        ind=Math.floor(Math.random()*words.length);
        temp=words[ind];
        words[ind]=words[i];
        words[i]=temp;
    }
    reform(words,index,final);
  }
  function checksent(sentence,index,final){
    for(i=0;i<final[index].length;i++){
        if(sentence==final[index][i]){
            return true;
        }
    }
    return false;
}
    function reform(words,index,final)
    {
    divis=document.getElementById("but");
    two_buttons=document.getElementById("reformation");
    correctness=document.getElementById("correctness");
    answ="";
    for(i=0;i<final[index].length;i++)
    {
      answ+=final[index][i]+"<br>";
    }
    arr=[];
    sentence="";
    divis.innerHTML="";
    two_buttons.innerHTML="";
    correctness.innerHTML="";
    document.getElementById("reformtext").innerHTML="";
    reform_but=document.createElement("input");
    reform_but.type="button";
    reform_but.value="Reform the sentence";
    reform_but.style.margin="3px 6px";
    check_but=document.createElement("input");
    check_but.type="button";
    check_but.value="Check correctness of the sentence";
    check_but.style.margin="3px 6px";
    correct=document.createElement("input");
    correct.type="button";
    correct.value="Get Correct Sentence"
    document.getElementById("refom").innerHTML=sentence;
    for(i=0;i<words.length;i++)
    {
        arr[i]=document.createElement("input");
        arr[i].type="button";
        arr[i].style.margin="3px 6px";
        arr[i].value=words[i];
        arr[i].onclick=function()
        {
          sentence+=this.value+" ";
          document.getElementById("refom").innerHTML=sentence;
          this.style.display="none";
          two_buttons.appendChild(reform_but);
          reform_but.onclick=function()
          {
              reform(words,index,final);
          };
          if(sentence.split(" ").length==words.length+1){
          two_buttons.appendChild(check_but);
          check_but.onclick=function(){
            if(checksent(sentence.trim(),index,final)){
                message=document.createElement("crct");
                message.innerHTML="<br>Right answer!!!<br><br>";
                correctness.appendChild(message);
            }
            else
              {
                message=document.createElement("crct");
                message.innerHTML="<br>Wrong answer!!!<br><br>";
                correctness.appendChild(message);
                correctness.appendChild(correct);
              }
            };
          }
          document.getElementById("reformtext").innerHTML="<b>Formed Sentence</b>(after selecting words)";
      };
        divis.appendChild(arr[i]);
    }
    correct.onclick=function(){
      if(correct.value=="Get Correct Sentence" || correct.value=="Get Answers"){
          answer=document.createElement("correct");
          answer.innerHTML=answ;
          correctness.appendChild(answer);
          correct.style.display="block";
          correct.value="Hide The correct sentence";
      }
      else{
          answer.innerHTML="";
          correct.value="Get Answers";
      }
  };
}