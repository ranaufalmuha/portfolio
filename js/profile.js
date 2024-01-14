function myprofile() {
    var linkinstagram = "https://www.instagram.com/ranaufalmuha/?hl=en";
    var linktwitter = "https://twitter.com/ranaufalmuha";
    var linklinkedin = "https://www.linkedin.com/in/ranaufal-muha-2babb22a8/";

    var ifalprofileid = document.getElementById("ifalprofileid");

    ifalprofileid.innerHTML = `
        <div class="px-4 py-5 bg-dark text-center rounded-4">
            <img src="/assets/images/myphoto.JPG" class="myprofile rounded-4" alt="">
            <div class="mb-4"></div>
            <h3 class="myfontbold">Ranaufal Muha</h3>
            <div class="mb-2"></div>
            <p class="text-disable">Software Developer</p>
            <div class="d-flex justify-content-center gap-3">
                <a href="${linkinstagram}"
                    class="btn bg-disable mybtncenter p-2"><img src="/assets/icons/instagram.png"
                        style="width: 20px; height: 20px;" alt=""></a>
                <a href="${linktwitter}" class="btn bg-disable mybtncenter p-2"><img
                        src="/assets/icons/twitter.png" style="width: 20px; height: 20px;" alt=""></a>
                <a href="${linklinkedin}"
                    class="btn bg-disable mybtncenter p-2"><img src="/assets/icons/linkedin.png"
                        style="width: 20px; height: 20px;" alt=""></a>
            </div>
            <div class="mb-4"></div>
            <div class="bg-disable d-flex flex-column gap-3 px-4 py-3 rounded-4">
                <!-- Email  -->
                <div class="d-flex gap-2">
                    <button class="btn btn-dark mybtncenter"><img src="/assets/icons/email.png"
                            style="width: 20px;" alt=""></button>
                    <div class="">
                        <p class="mysmalltext text-disable m-0">Email</p>
                        <p class="m-0">ifal.muha@gmail.com</p>
                    </div>
                </div>
                <!-- Location  -->
                <div class="d-flex  gap-2">
                    <button class="btn btn-dark mybtncenter"><img src="/assets/icons/location.png"
                            style="width: 20px;" alt=""></button>
                    <div class="">
                        <p class="mysmalltext text-disable m-0">Location</p>
                        <p class="m-0">Indonesia, Padang</p>
                    </div>
                </div>
                <!-- Birthday  -->
                <div class="d-flex  gap-2">
                    <button class="btn btn-dark mybtncenter"><img src="/assets/icons/birthday.png"
                            style="width: 20px;" alt=""></button>
                    <div class="">
                        <p class="mysmalltext text-disable m-0">Birthday</p>
                        <p class="m-0">June 23, 2003</p>
                    </div>
                </div>
            </div>
            <div class="row mb-4"></div>
            <div class="row mb-2"></div>
            <a href="#" class="bg-myprimary rounded-3"><img src="/assets/icons/download.png" alt=""> Download
                CV</a>
            </div>
        `;


}
myprofile();