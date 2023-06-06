var navLinks = document.querySelector(".home-sect .header .nav-links")
const icon = document.querySelector(".header-nxt .search-bar-box .icon")
const search = document.querySelector(".header-nxt .search-bar-box")


icon.onclick = function () {
    search.classList.toggle("active")
}

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px"
}


const stories = [
    {
        id: 1,
        title: 'Clock of hagatha',
        desc: 'A horror and thriller story for all those who wants to fear to death',
        link: "stories/story-1.html",
        class: "mlm"
    },
    {
        id: 2,
        title: 'ആരാണാ കൊലയാളി?',
        desc: "A crime scene thriller forensic horror story for detective story readers part-1",
        link: "stories/killer-who/who-killer.html",
        class: "mlm"
    },
    {
        id: 5,
        title: 'ആരാണാ കൊലയാളി?',
        desc: 'A crime scene thriller forensic horror story for detective story readers part-2',
        link: "stories/killer-who/killer-2.html",
        class: "mlm"
    }
]

const things = [...new Set(stories.map((item) => { return item }))]
function Searching(value) {
    const searchData = value

    const filterData = things.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })

    let res = document.getElementById("sRes")
    res.innerHTML = ""
    res.insertAdjacentHTML("afterbegin", filterData.map(e => (
        `<div class="card blog-card" style="width: 18rem;">
                        <div class="card-body .cont-box">
                            <h5 class="card-title mlm">${e.title}</h5>
                            <p class="card-text">${e.desc}</p>
                            <a href="${e.link}" class="btn btn-primary">View</a>
                        </div>
                    </div>`
    )).join(""))
}
Searching("")
document.getElementById("search-input").addEventListener("keyup", (e) => {

    Searching(e.target.value.toLocaleLowerCase())
})

