window.addEventListener("load", (event) => {

  const titles = document.querySelectorAll("h2, h3");
  const mapTitlesList = document.getElementById("mapTitlesList");
  if (titles.length > 0) {
    titles.forEach(title => {
      let id = slugify(title.outerText);
      const li = document.createElement('li');
      const a = document.createElement('a');

      title.setAttribute("id", id);
      a.setAttribute('href', "#" + id)
      a.innerText = title.outerText;
      
      if(title.nodeName == "H3"){
        li.classList.add("ps-1");
      }
      li.appendChild(a);
      mapTitlesList.appendChild(li);
    });
  } else {
    const mapTitles = document.getElementsByClassName("mapTitles");
    mapTitles[0].style.border = "none";
  }
  function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return str;
  }
});