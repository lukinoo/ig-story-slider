const container = document.querySelector(".container");
const add_story_button = document.getElementById("add-story-btn");

const API_URI = "https://randomuser.me/api/";

const createUserStory = (data) => {
  const story = document.createElement("div");
  story.classList.add("container--wrapper");

  const {
    name: { first },
    picture: { large },
  } = data;

  story.innerHTML = `
        <div class="container--img_wrapper">
          <img
            src="${large}"
            alt="user"
            class="container--img"
          />
        </div>
        <h3 class="container--user__title">${first}</h3>
  `;

  container.appendChild(story);
};

const fetchRandomUser = async () => {
  try {
    const req = await fetch(API_URI);
    const json = await req.json();

    createUserStory(json.results[0]);
  } catch (err) {
    console.error(err);
  }
};

add_story_button.addEventListener("click", () => {
  container.scrollLeft = container.scrollWidth;
  fetchRandomUser();
});
