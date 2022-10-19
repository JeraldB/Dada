
const displays = document.querySelector('#display');
const buttons = document.querySelectorAll('button');


buttons.forEach((item)=>{
    item.onclick = ()=>{
        if (item.id == 'clear'){
            displays.innerText = '';
        }
        else if (item.id == 'backspace'){
            let string = displays.innerText.toString();
            displays.innerText = string.substr(0, string.length - 1);
        }
        else if (displays.innerText != '' && item.id == 'equal'){
           
            try {
                displays.innerText = eval(displays.innerText);
            }
            catch{
                displays.innerText = 'ERROR!';
                setTimeout(() => (displays.innerText = ''), 2000);
            }

        }
        else if (displays.innerText == '' && item.id =='equal'){
            displays.innerText = 'Empty!';
            setTimeout(() => (displays.innerText = ''), 2000);    
        }
        else{
            displays.innerText += item.id;
        }
    }
})


