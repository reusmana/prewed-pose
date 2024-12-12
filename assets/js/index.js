const currentHost = window.location.host;
const processHost = "prod";

const loading = document.querySelector("#loading");

document.addEventListener("DOMContentLoaded", () => {
  loading.classList.remove('flex')
  loading.classList.add('hidden')
});



const imagesJson = await fetch(`assets/images/index.json`).then((res) =>
  res.json()
);
console.log(imagesJson);
const poseContainer = document.querySelector("#pose");

imagesJson.forEach((image) => {
  const container = document.createElement("div");
  container.className =
    "relative w-1/2 overflow-hidden cursor-pointer h-fit group sm:w-1/2 md:w-1/3 xl:w-1/4 rounded-2xl";

  // Set the inner HTML for the div
  container.innerHTML = `
    <img src="./assets/images/${image.images}" alt="" />
    <div
      class="absolute group-hover:flex hidden transition-all ease-in-out duration-500 inset-0 bg-black bg-opacity-45 text-6xl text-white font-bold justify-center items-center"
    >
      ${image.id}
    </div>
  `;

  // Append the container to the pose container
  poseContainer.appendChild(container);
});
