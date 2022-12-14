console.log('selamat pagi bakal ada update kedepannya okay stay tune bro!');
const datas={
    anime:{
        title:'my anime list',
        gotobun:{
            title:'gotobun no hanayome',
            rate:'5.6',
            trailer:'https://www.youtube.com/embed/PdHjr_vO-zg',
        },
        kimetsu:{
            title:'kimetsu no yaiba',
            rate:'7.6',
            trailer:'https://www.youtube.com/embed/9AIdcgazwwU',
        },
    }
}

const Iframe=(title,trailer,width=1343,height=488)=>(
   `<iframe width="${width}" height="${height}" src="${trailer}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
)


const getId=(id)=>document.getElementById(id);

const gotobun=datas.anime.gotobun
const gotobunData=()=>(
        `<ul>
            <li>${gotobun.title}</li>
            <li>${gotobun.rate}</li>
            <li>${Iframe(gotobun.title,gotobun.trailer)}</li>
        </ul>`
    ) 

const Kny=datas.anime.kimetsu
const KnyData=()=>(
        `<ul>
            <li>${Kny.title}</li>
            <li>${Kny.rate}</li>
            <li>${Iframe(Kny.title,Kny.trailer)}</li>
        </ul>`
    ) 

getId('title').innerHTML+=datas.anime.title
getId('gotobun').innerHTML+=gotobunData()
getId('kny').innerHTML+=KnyData()
