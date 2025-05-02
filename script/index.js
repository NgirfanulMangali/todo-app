const saveData = [];

document.getElementById("input").addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {
        const input = document.getElementById("input").value;
        saveData.push(input);
        const listResult = document.getElementById("result");
        listResult.innerHTML = "";
        saveData.forEach((item) => {
            listResult.innerHTML += ` <div class="w-[450px] h-[60px] bg-Very-Dark-Grayish-Blue-alt rounded-t-lg flex px-4 break-all overflow-auto ">
                        <div class="mt-3">
                            <div class="w-[30px] h-[30px] rounded-full bg-Very-Dark-Grayish-Blue-alt border-[1px] border-Dark-Grayish-Blue"></div>
                        </div>
                        <div class="mx-5">
                            <p class="text-Light-Grayish-Blue-hover  mt-4">${item} </p>
                        </div>
                        <div class="flex items-center justify-center ml-auto">
                            <button class="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"><img src="/images/icon-cross.svg" alt="icon-cross" class=""></button>
                        </div>
                </div>`;
        });
        document.getElementById("bawah").innerHTML = `
                    <div class="w-[450px] h-[60px] bg-Very-Dark-Grayish-Blue-alt rounded-t-lg flex px-4 break-all overflow-auto border-b-1 border-Dark-Grayish-Blue">
                                    <div class="mt-3">
                                        <div class="w-[30px] h-[30px] rounded-full bg-Very-Dark-Grayish-Blue-alt border-[1px] border-Dark-Grayish-Blue"></div>
                                    </div>
                                    <div class="mx-5">
                                        <p class="text-Light-Grayish-Blue-hover  mt-4">rrr </p>
                                    </div>
                                    <div class="flex items-center justify-center ml-auto">
                                        <button class="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"><img src="/images/icon-cross.svg" alt="icon-cross" class=""></button>
                                    </div>
                            </div>

                    <div class="w-[450px] h-[60px] bg-Very-Dark-Grayish-Blue-alt  flex items-center justify-center px-4 rounded mt-6">
                    <div class="flex items-center px-4 text-Dark-Grayish-Blue gap-5">
                        <button class="cursor-pointer"><p>All</p></button>
                        <button class="cursor-pointer"><p>Active</p></button>
                        <button class="cursor-pointer"><p>Completed</p></button>
                    </div>`;
    }
});



