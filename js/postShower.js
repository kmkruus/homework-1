var currentPost = 0 //keep track of latest added post, TODO: think about replacing with system which makes posts show up in different order or maybe show newest first (from largest ID)
var feedEnd = false //keep track of if end of feed has been reached, prevent multiple EoF messages from being diplayed

function addPostInit() {
    //fetch('https://api.jsonsilo.com/public/a69d1cb6-7edb-431f-af0e-64b3b2c9175d')
        //.then(response => {
            //if (!response.ok) throw new Error(response.status);
            //return response.json();
        //})
        //.then(data => {
            //data.posts.forEach(({id, date, image, text}) => {
                //addPostToFeed(id, date, image, text);
            //});
        //});
    fetch('https://api.jsonsilo.com/public/a69d1cb6-7edb-431f-af0e-64b3b2c9175d')
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(data => {
            data.posts.forEach(({id, date, image, text}) => {
                addPostToFeed(id, date, image, text);
            });
        });
    addPostToFeed(); // TODO: add fetching json data and feeding it into here, otherwise will just run on default values
    //TODO: when JSON runs out display a "post" that says end of feed and set feedEnd to True, the end of feed post should have button to set feedEnd to false to attempt loading more posts

    //pseudocode idea
    //if !feedEnd
        //try:
            //get data from json on post where id=currentPost
            // addPostToFeed with the data
            //currentPost +=1   //possibly have it iterate down, so newest posts appear at the top
        //else:
            //add a div (similar to a post) into the feed with a message that we're out of posts and a button that removes it and sets feedEnd to false (button will need more js)
            //feedEnd = True
}

function addPostToFeed(userid, date = "Jan, 1, 1970", image, text = "Lorem Ipsum") { //included default values
    if(image == undefined) {
        imgHTML = ``
    } else {
        imgHTML = `<br>
                    <img src="images/` + image + `" alt="postAttachment">`
    }
    if(userid = undefined) {
        userPFP = "icon.PNG"
    } else {
        userPFP = "icon.PNG" // TODO: implement a system to get user's pfp from id, also system to check if that pfp exists and otherwise default to the default
    }
    document.getElementById("feed") //post design is hardcoded in a really annoying way, surely there's a better way to do it
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

addPostInit();
window.addEventListener('scroll', () => {
  const feed = document.getElementById('feed');
  if (!feed) return;

  const rect = feed.getBoundingClientRect();
  const scrollPos = window.innerHeight + window.scrollY;
  const feedBottom = feed.offsetTop + feed.offsetHeight;

  // Detect if user is within 200px of bottom, maybe tweak a bit
  if (scrollPos >= feedBottom - 200 && !feedEnd) {
    addPostInit();
  }
});
