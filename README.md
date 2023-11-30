# codedbycatportfolio


        <script>
            const bandmates = "<p>BandMates was a project created by myself and three other teammates for our final project at Le Wagon. BandMates is a mobile application for musicans to connect with other musicans within their area.</p>";
            const omnifood = "<p>Omnifood is a mock delivery service I created to demonstrate web page responsiveness, CSS styling, and an introduction to baisc JQuery features.</p>";
            const venulet = "<p>VenuLet was a project created by myself and three other teammates during our \"AirBnb clone week\" at Le Wagon.</p>";
            const bandmatesLinks = "<a href=\"https://bandmates807.herokuapp.com/\" target=\"_blank\">Go to app</a>"
            const omnifoodLinks = "<a href=\"https://catherinerosejex.github.io/omnifood/\" target=\"_blank\">Go to website</a>"
            const venuletLinks = "<a href=\"https://airbnb-catherinejex.herokuapp.com/\" target=\"_blank\">Go to website</a>"

            const projectHTML = {"bandmates":{"p": bandmates, "a": bandmatesLinks}, "omnifood":{"p": omnifood, "a": omnifoodLinks}, "venulet":{"p": venulet, "a": venuletLinks}}

            const exampleModa l = document.getElementById('exampleModal')
            exampleModal.addEventListener('show.bs.modal', function (event) {

            const button = event.relatedTarget
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBody = exampleModal.querySelector('.modal-body')
            const modalFooter = exampleModal.querySelector('.modal-footer')

            modalTitle.textContent = button.id
            modalBody.innerHTML = ''
            modalBody.insertAdjacentHTML("afterbegin", projectHTML[button.id].p)
            modalFooter.innerHTML = ''
            modalFooter.insertAdjacentHTML("afterbegin", projectHTML[button.id].a)
            })
        </script>