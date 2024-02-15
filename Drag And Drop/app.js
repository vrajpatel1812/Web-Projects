const leftBox = document.querySelector("#left");
        const rightBox = document.querySelector("#right");
        const lists = document.querySelectorAll(".list");

        for(list of lists) {
            list.addEventListener('dragstart', (e)=>{
                let select = e.target;

                rightBox.addEventListener('dragover', (e)=>{
                    e.preventDefault();
                    console.log("dragover")
                })
                rightBox.addEventListener('drop', (e)=>{
                    rightBox.appendChild(select);
                    select=null;
                    console.log("drop")
                })
                
                leftBox.addEventListener('dragover', (e)=>{
                    e.preventDefault();
                    console.log("dragover")
                })
                leftBox.addEventListener('drop', (e)=>{
                    leftBox.appendChild(select);
                    select=null;
                    console.log("drop")
                })
            })

        };