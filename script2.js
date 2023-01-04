const url_img = 'https://cdn.appanimeplus.tk/img/'

const urlParams = new URLSearchParams(window.location.search)

const id = urlParams.get('id')

async function pegar_info() {

    const body = document.getElementById('info')

    const url_in = `https://appanimeplus.tk/play-api.php?info=${id}`

    const resp_in = await fetch(url_in)

    const data_in = await resp_in.json()

    function pegar_info_anime() {
        data_in.map((resp) => {
            const img = document.createElement('img')

            img.src = `${url_img}${resp.category_image}`

            body.append(img)

            const name = document.createElement('h1')

            name.innerText = resp.category_name

            body.append(name)

            const lanc = document.createElement('p')

            lanc.innerText = `lançado em: ${resp.ano}`

            body.append(lanc)

            const desc = document.createElement('p')

            desc.innerText = resp.category_description

            desc.classList.add('desc')

            body.append(desc)
        })
    }

    pegar_info_anime();

    async function pegar_ep() {
        const url_ep = `https://appanimeplus.tk/play-api.php?cat_id=${id}`

        const resp = await fetch(url_ep)

        const body = document.getElementById('ep')

        const data = await resp.json()

        console.log(data)

        data.map((resp) => {

            const div = document.createElement('div')

            const title_ep = document.createElement('p')

            title_ep.innerText = resp.title

            div.append(title_ep)

            const but_ap = document.createElement('a')

            but_ap.innerText = 'Ver'


            async function pegar_vid() {
                const url = `https://appanimeplus.tk/play-api.php?episodios=${resp.video_id}`

                const resp2 = await fetch(url)

                const data_inst = await resp2.json() 

                data_inst.map((resp) => {

                but_ap.href =  `video.html?ep=${resp.video_id}`
            })}

            pegar_vid();
            
            div.append(but_ap)

            body.append(div)
        })


    }

    pegar_ep();
}

pegar_info()