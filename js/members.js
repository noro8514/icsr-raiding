const testButton = document.getElementById("testButton");
const section = document.getElementById("skipTo");

testButton.addEventListener("click", function(){
    testFunction();
});

async function testFunction() {
    try{
        const data = await fetch('https://icsr-webservice.onrender.com');
            if(!data.ok){
                throw new Error("Error fetching data");
            }
            else{
                const stringedData = await data.text();
                const addPara = document.createElement('p');
                addPara.textContent = stringedData;
                section.appendChild(addPara);
            }
    }
    catch(error){
        console.error('Caught error', error);
    }
}