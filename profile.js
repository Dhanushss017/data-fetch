function displayUserProfile() {
    var userDetailsElement = document.getElementById("userDetails");
    var userDetailString = localStorage.getItem("selectedUser");
    var user = JSON.parse(userDetailString);

    userDetailsElement.innerHTML = `
    <div class="row mt-5">
    
    <div class="col-md-6 col-lg-3 col-xl-3 pe-xl-4 position-relative">
<div class="card bg_blue  h-100 br-20">
<div class="card-body p-md-4 nav_tabs">
<ul class="d-flex justify-content-between d-md-block mb-0">
<li class="text-white border_grey fs-16"><a class="text-white text-decoration-none" href="profile.html">Profile</a></li>
<li class="text-white border_grey fs-16"><a class="text-white text-decoration-none" href="posts.html">Posts</a></li>
<li class="text-white border_grey fs-16"><a class="text-white text-decoration-none" href="gallery.html">Gallery</a></li>
<li class="text-white border_grey fs-16"><a class="text-white text-decoration-none" href="todo.html">Todo</a></li>

</ul>
</div>
</div>
    </div>
    <div class="col-md-6 col-lg-4 col-xl-3 text-lg-center border_right px-xl-4">
    <h3 class="fw-600 fs-24 text-start opacity-1 text_black mt-4 mt-md-0 mb-5">Profile</h3>
   <img class="img-fluid profile_img" src="${user.profilepicture}">
      <h2 class="fw-600 fs-24 ls-1 mt-3">${user.name}</h2>
      <p class="text_darkgrey fs-18 ">User Name : <span class="fw-600 opacity-1 text_black">${user.username} </span></p>
      <p class="text_darkgrey fs-18 ">Phone : <span class="fw-600 opacity-1 text_black">${user.phone}<span></p>
      <p class="text_darkgrey fs-18 ">Email : <span class="fw-600 opacity-1 text_black">${user.email}</p>
      <p class="text_darkgrey fs-18 ">Website : <span class="fw-600 opacity-1 text_black">${user.website}</p>
      <hr class="mx_6">
      <h3 class="text_darkgrey   fs-18  mb-3"> Company</h3>
      <p class="text_darkgrey fs-18 ">Name : <span class="fw-600 opacity-1 text_black">${user.company.name}</p>
      <p class="text_darkgrey fs-18 ">CatchPhrase : <span class="fw-600 opacity-1 text_black">${user.company.catchPhrase}</p>
      <p class="text_darkgrey fs-18 ">Bs : <span class="fw-600 opacity-1 text_black">${user.company.bs}</p>

      </div>
      <div class="col-md-12 col-lg-5 col-xl-6 mt-3 mt-md-5 ps-xl-4">
      <span class="border-left"></span>
      <h3 class="text_darkgrey ms-xl-4 mt-3  fs-18 "> Address</h3>
     <div class="p-3  px-xl-5 py-md-2">
      <p class="text_darkgrey fs-18 ">Street : <span class="fw-600 opacity-1  text_black">${user.address.street}</p>
      <p class="text_darkgrey fs-18 ">Suite : <span class="fw-600 opacity-1  text_black">${user.address.suite}</p>
      <p class="text_darkgrey fs-18 ">City : <span class="fw-600 opacity-1  text_black">${user.address.city}</p>
      <p class="text_darkgrey fs-18 ">Zipcode : <span class="fw-600 opacity-1  text_black">${user.address.zipcode}</p>
      <iframe class="w-100  br-20" height="300px" src="https://maps.google.com/maps?q='+${user.address.geo.lat}+','+${user.address.geo.lng}+'&hl=eng&z=14&amp;output=embed&zoom=15"</iframe>
      </div>
    </div>
      
      </div>
      
    `;
}

// On page load, display the user details on the profile page
document.addEventListener("DOMContentLoaded", function () {
    displayUserProfile();
});

function displaySignin() {
    var userLoginElement = document.getElementById("userLogin");
    var selectedUserString = localStorage.getItem("selectedUser");
    var userlogin = JSON.parse(selectedUserString);
    userLoginElement.innerHTML = `
   <div class="d-md-flex gap-4">
   <div class="signed-User text-center">
   <div class="dropdown">
            <a class="btn  shadow-none" type="button" id="signedIn" data-bs-toggle="dropdown" aria-expanded="false">
             <span>
             <img class="img-fluid signed-in" src="${userlogin.profilepicture}">
             <span class="fw-600 d-block mt-2 mt-md-0 d-md-inline opacity-1 text_black">${userlogin.username} </span>
             </span>
            </a>
            <ul class="dropdown-menu p-4 br-20 border-0 text-center signed-incard" aria-labelledby="signedIn">
            <li><img class="img-fluid img-aftersignin" src="${userlogin.profilepicture}">
            <p class="fw-600  mt-2 fs-18 mb-0  text_black">${userlogin.username} </p>
            <span class="fw-600  fs-16 mb-3 opacity-1 text_darkgrey">${userlogin.email}</span>
            </li>
<li><a href="api.html" type="button" class="btn  br-20 fs-14 btn-danger">Sign Out</a>
</li>
            </ul>
          </div>
      </div>
  
   </div>
   </div>
   
    `;
}
document.addEventListener("DOMContentLoaded", function () {
    displaySignin();
});
