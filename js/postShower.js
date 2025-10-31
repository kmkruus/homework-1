var currentPost = 0 //keep track of latest added post, TODO: think about replacing with system which makes posts show up in different order or maybe show newest first (from largest ID)
var feedEnd = false //keep track of if end of feed has been reached, prevent multiple EoF messages from being diplayed

function addPostInit() {
    addPostToFeed(); // TODO: add fetching json data and feeding it into here, otherwise will just run on default values
    //TODO: when JSON runs out display a "post" that says end of feed and set feedEnd to True, the end of feed post should have button to set feedEnd to false to attempt loading more posts
}

function addPostToFeed(userid, date = "Jan, 1, 1970", image, text = "Lorem Ipsum") { //included default values
    if(image == undefined) {
        imgHTML = ``
    } else {
        imgHTML = `<br>
                    <img src="images/` + image + `" alt="postAttachment">`
    }
    if(userid = undefined) {
        userPFP = "icon.png"
    } else {
        userPFP = "icon.png" // TODO: implement a system to get user's pfp from id, also system to check if that pfp exists and otherwise default to the default
    }
    document.getElementById("feed")
                .innerHTML +=
                `<div class="post">
                    <div class="push">
                        <img src="images/` + userPFP + `" alt="ikoon">
                    </div>
                    <h3>` + date + `</h3>`
                    + imgHTML +                    
                    `<br>
                    <a>
                        ` + text + `
                    </a>
                    <br>
                    <div class="push">
                        <img src="images/thumbsup.png" alt="likeButton">
                    </div>
                </div>
                <br>`;
}

window.addEventListener('scroll', () => {
  const feed = document.getElementById('feed');
  if (!feed) return;

  const rect = feed.getBoundingClientRect();
  const scrollPos = window.innerHeight + window.scrollY;
  const feedBottom = feed.offsetTop + feed.offsetHeight;

  // Detect if user is within 200px of bottom, maye tweak a bit
  if (scrollPos >= feedBottom - 200 && !feedEnd) {
    addPostInit();
  }
});