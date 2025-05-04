let getuser = document.querySelector(" form input");
let getdatabtn = document.querySelector(" .getbtn");
let screen = document.querySelector(".screen");
let headstyle= document.querySelector(".header");

getdatabtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let username = getuser.value;
  if (username === "") {
    getuser.value = "Enter Valid Username";
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((raw) => raw.json())
    .then((data) => {
      console.log(data);
      headstyle.classList.remove("head");
      Decoratescreen(data);

    });
});

function Decoratescreen(details) {
  let Data = `<div class="min-h-screen flex flex-col justify-center items-center">
  <header class="w-full max-w-6xl bg-[#010409] p-4 sm:p-6 text-white flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
    <div class="flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="40" viewBox="0 0 24 24" width="40" class="octicon">
        <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z" fill="#F0F6FC"></path>
      </svg>
      <p class="text-xl font-semibold">${details.login}</p>
    </div>
    <div>
      <img src="${details.avatar_url}" class="w-20 h-20 object-cover rounded-full border border-gray-600" />
    </div>
  </header>

  <div class="w-full max-w-6xl bg-[#010409] border-y border-[#2A3138] text-white flex flex-col sm:flex-row justify-evenly text-center p-4 gap-4 sm:gap-0">
    <p>Repositories <span class="font-bold">${details.public_repos}</span></p>
    <p>Followers <span class="font-bold">${details.followers}</span></p>
    <p>Following <span class="font-bold">${details.following}</span></p>
  </div>

  <section class="w-full max-w-6xl bg-[#0D1117] text-white p-4 space-y-6">
    <div class="border border-[#2A3138] p-4 flex flex-col md:flex-row justify-between items-start gap-6">
      <div class="flex flex-col gap-3 w-full md:w-1/2">
        <div>
          <p class="font-semibold">Company:</p>
          <h3 class="text-center">${details.campany ? details.campany : ""}</h3>
        </div>
        <div>
          <p class="font-semibold">Bio:</p>
          <p class="text-sm text-center">${details.bio ? details.bio : ""}</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 w-full md:w-1/2">
        <div class="flex justify-between">
          <p class="font-semibold">Name:</p>
          <p>${details.name ? details.name : ""}</p>
        </div>
        <div class="flex justify-between">
          <p class="font-semibold">Joined:</p>
          <p>${details.created_at ? details.created_at : ""}</p>
        </div>
      </div>
    </div>
  </section>
</div>
`;
  screen.innerHTML = Data;
}

