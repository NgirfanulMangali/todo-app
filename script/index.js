// Save data in local storage
const saveData = [];



// Get the input element and add an event listener for the 'keydown' event
document.getElementById("input").addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = document.getElementById("input").value;
        saveData.push(input);
        const listResult = document.getElementById("result");
        listResult.innerHTML = "";

        saveData.forEach((item, index) => {
            listResult.innerHTML += `
                                <!-- List Result-->

     <div id="result">
            <div class="remove w-[21.875rem] h-[3.125rem] bg-Very-Dark-Grayish-Blue-alt flex px-4 break-all overflow-auto border-b-1 border-Dark-Grayish-Blue">
                    <div class="mt-3">
                        <div class="w-[30px] h-[30px] rounded-full bg-Very-Dark-Grayish-Blue-alt border-[1px] border-Dark-Grayish-Blue toMark" data-index="${index}"></div>
                    </div>
                    <div class="mx-5">
                        <p class="text-Light-Grayish-Blue-hover mt-4" id="cross-${index}">${item}</p>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                        <button class="cursor-pointer w-[30px] h-[30px] flex items-center justify-center buttonEraser">
                            <img src="/images/icon-cross.svg" alt="icon-cross">
                        </button>
                    </div>
            </div>
    
    
     </div>
    `;
        });

        const buttonText = document.getElementById("a-group-of-buttons");
        buttonText.innerHTML = ` <!-- Button Text-->
                    
       
                        <div class="w-[21.875rem] h-[3.125rem] bg-Very-Dark-Grayish-Blue-alt  flex justify-between px-4 rounded-b-lg text-Dark-Grayish-Blue ">
                            <p class="mt-3" id="items-left">5 items left</p>
                            <button class="cursor-pointer" id="clearCompleted"><p>Clear Completed</p></button>
                        </div>
                
                        <div class="w-[21.875rem] h-[3.125rem] bg-Very-Dark-Grayish-Blue-alt  flex items-center justify-center px-4 rounded mt-6">
                        <div class="flex items-center px-4 text-Dark-Grayish-Blue gap-5 ">
                            <button class="cursor-pointer" id="all"><p>All</p></button>
                            <button class="cursor-pointer" id="active"><p>Active</p></button>
                            <button class="cursor-pointer " id="completed"><p>Completed</p></button>
                        </div>
                  
`;





        // increment items left
        let itemsLeft = 0;
        saveData.forEach((item) => {
            if (item !== "") {
                itemsLeft++;
            }
        });
        document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;

        // Tambahkan event listener ke semua elemen dengan class "toMark"
        document.querySelectorAll(".toMark").forEach((circle) => {
            circle.addEventListener("click", klikCircle);
        });

        //event listener for the buttonEraser
        document.getElementById("result").addEventListener("click", (event) => {
            if (event.target.closest(".buttonEraser")) {
                const taskElement = event.target.closest(".remove"); // Cari elemen parent dengan class "remove"
                if (taskElement) {
                    taskElement.remove(); // Hapus elemen parent
                    const itemsLeft = document.querySelectorAll("#result p.line-through").length;
                    document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;
                }
            }
        });



    }




    function klikCircle(event) {
        const circle = event.target;
        const index = circle.getAttribute("data-index");


        circle.innerHTML = `
        <div class="w-[30px] h-[30px] rounded-full bg-linear-to-br from-young-blue to-young-purple flex items-center justify-center">
            <img src="/images/icon-check.svg" alt="icon-check" class="w-[14px] h-[12px]">
        </div>`;


        const crossText = document.getElementById(`cross-${index}`);
        crossText.classList.add("line-through");
    }

    // Add event listener Clear Completed button

    document.getElementById("clearCompleted").addEventListener("click", () => {
        const tasks = document.querySelectorAll("#result div");
        tasks.forEach((task) => {
            const textElement = task.querySelector("p");
            if (textElement && textElement.classList.contains("line-through")) {
                task.remove();
            }
        });
        const itemsLeft = document.querySelectorAll("#result p:not(.line-through)").length;
        document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;
    });

    // Add event listener for "active" button
    document.getElementById("active").addEventListener("click", () => {

        document.getElementById("active").classList.add("text-Bright-Blue");
        document.getElementById("all").classList.remove("text-Bright-Blue");
        document.getElementById("completed").classList.remove("text-Bright-Blue");

        document.querySelectorAll("#result div").forEach((task) => {
            const textElement = task.querySelector("p");
            if (textElement && textElement.classList.contains("line-through")) {
                task.style.display = "none"; // Sembunyikan elemen parent
            } else {
                task.style.display = "flex"; // Tampilkan elemen parent
            }
        });
        const itemsLeft = document.querySelectorAll("#result p:not(.line-through)").length;
        document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;
    });



    // Add event listener for "all" button
    document.getElementById("all").addEventListener("click", () => {


        document.getElementById("all").classList.add("text-Bright-Blue");
        document.getElementById("active").classList.remove("text-Bright-Blue");
        document.getElementById("completed").classList.remove("text-Bright-Blue");
        document.querySelectorAll("#result div").forEach((task) => {
            task.style.display = "flex";
        });

        const itemsLeft = document.querySelectorAll("#result p").length;
        document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;
    });

    // Add event listener for "completed" button
    document.getElementById("completed").addEventListener("click", () => {

        document.getElementById("completed").classList.add("text-Bright-Blue");
        document.getElementById("all").classList.remove("text-Bright-Blue");
        document.getElementById("active").classList.remove("text-Bright-Blue");


        // Sembunyikan elemen tugas yang belum selesai
        document.querySelectorAll("#result div").forEach((task) => {
            const textElement = task.querySelector("p");
            if (textElement && !textElement.classList.contains("line-through")) {
                task.style.display = "none"; // Sembunyikan elemen parent
            } else {
                task.style.display = "flex"; // Tampilkan elemen parent
            }
        });
        const itemsLeft = document.querySelectorAll("#result p.line-through").length;
        document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;
    });





    document.getElementById("result").addEventListener("click", (event) => {
        if (event.target.closest(".buttonEraser")) {
            const taskElement = event.target.closest(".remove"); // Cari elemen parent dengan class "remove"
            if (taskElement) {
                taskElement.remove(); // Hapus elemen parent
                const itemsLeft = document.querySelectorAll("#result p").length;
                document.getElementById("items-left").innerHTML = `<p id="items-left">${itemsLeft} items left</p>`;
            }
        }
    });






});




