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
                <div class="w-[450px] h-[60px] bg-Very-Dark-Grayish-Blue-alt flex px-4 break-all overflow-auto border-b-1 border-Dark-Grayish-Blue">
                    <div class="mt-3">
                        <div class="w-[30px] h-[30px] rounded-full bg-Very-Dark-Grayish-Blue-alt border-[1px] border-Dark-Grayish-Blue toMark" data-index="${index}"></div>
                    </div>
                    <div class="mx-5">
                        <p class="text-Light-Grayish-Blue-hover mt-4" id="cross-${index}">${item}</p>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                        <button class="cursor-pointer w-[30px] h-[30px] flex items-center justify-center">
                            <img src="/images/icon-cross.svg" alt="icon-cross" class="">
                        </button>
                    </div>
                </div>`;
        });

        // Tambahkan event listener ke semua elemen dengan class "toMark"
        document.querySelectorAll(".toMark").forEach((circle) => {
            circle.addEventListener("click", klikCircle);
        });
    }
});

function klikCircle(event) {
    const circle = event.target;
    const index = circle.getAttribute("data-index");

    // Ubah tampilan lingkaran menjadi centang
    circle.innerHTML = `
        <div class="w-[30px] h-[30px] rounded-full bg-linear-to-br from-young-blue to-young-purple flex items-center justify-center">
            <img src="/images/icon-check.svg" alt="icon-check" class="w-[14px] h-[12px]">
        </div>`;

    // Tambahkan garis pada teks yang sesuai
    const crossText = document.getElementById(`cross-${index}`);
    crossText.classList.add("line-through");
}