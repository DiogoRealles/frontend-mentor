const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#btnSubmit');
const githubAvatar = document.querySelector('#githubAvatar');
const githubName = document.querySelector('#githubName');
const githubLogin = document.querySelector('#githubLogin');
const githubCreated_at = document.querySelector('#githubCreated_at');
const githubBio = document.querySelector('#githubBio');
const githubRepos = document.querySelector('#githubRepos');
const githubFollowers = document.querySelector('#githubFollowers');
const githubFollowings = document.querySelector('#githubFollowings');
const githubLocation = document.querySelector('#githubLocation');

btnSubmit.addEventListener('click', fnFinderUser);

function fnFinderUser(e){
  e.preventDefault();
  const searchUser = document.querySelector('#searchUser');
  const user = searchUser.value;
  fnFetch(user);
}

function fnFetch(user){
  fetch(`https://api.github.com/users/${user}`)
  .then((res) => {
    return res.json();
  })
  .then((objUser) => {
    githubAvatar.src = objUser.avatar_url;
    githubName.innerText = objUser.name;
    githubLogin.href = `https://github.com/${objUser.login}`;
    githubLogin.innerText = `@${objUser.login}`;
    githubCreated_at.innerText = objUser.created_at.substring(0, 10);
    githubBio.innerText = objUser.bio;
    githubRepos.innerText = objUser.public_repos;
    githubFollowers.innerText = objUser.followers;
    githubFollowing.innerText = objUser.following;
    githubLocation.innerText = objUser.location;
    githubTwitter.innerText = objUser.twitter_username;
    githubBlog.innerText = objUser.blog;
    githubCompany.innerText = objUser.company;
  })
}
