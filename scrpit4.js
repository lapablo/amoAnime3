const urlParams = new URLSearchParams(window.location.search)

const param = urlParams.get('ep')

async function pegar_ep() {
    const url = `https://appanimeplus.tk/play-api.php?episodios=${param}`

    const resp =  await fetch(url)

    const data = await resp.json()

    console.log(data)

    data.map((resp) => {

        async function voltar_epesodio() {
            const url = `https://appanimeplus.tk/play-api.php?episodios=${resp.video_id}&catid=${resp.category_id}&previous`

            const resp2 = await fetch(url)

            const data2 = await resp2.json()

            data2.map((val) => {

                window.location.href = `video.html?ep=${val.video_id}`
            })
        }

        async function avancar_epesodio() {
            const url = `https://appanimeplus.tk/play-api.php?episodios=${resp.video_id}&catid=${resp.category_id}&next`

            const resp2 = await fetch(url)

            const data2 = await resp2.json()

            data2.map((val) => {
                window.location.href = `video.html?ep=${val.video_id}`
            })
        }

        const vid = document.getElementById('video')

        vid.src = resp.location

        const t = document.getElementById('titulo')

        t.innerText = resp.title

        const vol = document.getElementById('vol')

        vol.addEventListener('click', voltar_epesodio)

        const avan = document.getElementById('van')

        avan.addEventListener('click', avancar_epesodio)

    })
}

pegar_ep()