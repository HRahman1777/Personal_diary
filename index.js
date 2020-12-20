const date= document.querySelector('.date');
const heading= document.querySelector('.s_line');
const desc=document.querySelector('#subject');
const add= document.querySelector('.Submt');
const diary=document.querySelector('.Diary');


add.addEventListener('click', function(){
    if(date.value=='' || heading.value=='' || desc.value==''){
        alert('Please full the field properly');
    }
    else{
        const newdata=document.createElement('tr');


        const newcolm=document.createElement('td');
        newcolm.innerHTML=date.value;
        newdata.appendChild(newcolm);

        
        const newcolm2=document.createElement('td');
        newcolm2.innerHTML=heading.value;
        newdata.appendChild(newcolm2);


        
        const newcolm3=document.createElement('td');
        const textt=document.createElement('textarea');
        textt.innerHTML=desc.value;
        newcolm3.appendChild(textt);
        textt.classList.add("jsstyle");
        newdata.appendChild(newcolm3);

        diary.appendChild(newdata);


    }
});

