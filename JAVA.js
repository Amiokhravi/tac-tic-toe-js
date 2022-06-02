// let test={
// let student = [
//     {name: 'امیر', family: 'اخروی', age: '23', classid: '100'},
//     {name: 'محمد', family: 'محمدی', age: '30', classid: '200'},
//     {name: 'علی', family: 'یاسری', age: '28', classid: '400'}
// ],
// let Class = [
//     {
//         id: '100',
//         classname: 'بازرگانی'
//     },
//     {
//         id: '200',
//         classname: 'تجارت'
//     },
//     {
//         id: '300',
//         classname: 'فارسی'
//     },
//     {
//         id: '400',
//         classname: 'الکترونیک'
//     }
// ],
// debugger,
//
// // let student_info = [],
// // for (let i = 0; i < student.length; i++) {
// //     console.log('this is student', student[i])
// //
// //     for (let c = 0; c < Class.length; c++) {
// //         if (student[i].classid === Class[c].id) {
// //             let class_name = '';
// //             class_name += Class[c].classname
// //             student[i].class_name = class_name
// //         }
// //     }
// // },
// // console.log(student)
// }
// import Swal from '/node_modules/sweetalert2/dist/sweetalert2.all.js' علت معلوم نبود چی بود اما با اضاف کردن روش اول درست شد باید از ای اس ۶ باشه
window.Swal = Swal
window.FnClick = FnClick
let game_with = ['x', 'o']
let c1;
let c2;
let player_1 =
    {
        sample_card: c1,
        score: 0,
    }
let player_2 =
    {
        sample_card: c2,
        score: 0,
    }

document.onloadstart = Swal.fire({
    title: 'HELO PLAYER 1',
    text: "choose your card play",
    width: 600,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'O',
    cancelButtonText: 'X',
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
    rgba(0,0,123,0.4)
    no-repeat
  `
    ,
    didClose() {
        Swal.fire({
                title: 'HELO PLAYER 2',
                text: `yours is ${c2}`,
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
    rgba(0,0,123,0.4)
    no-repeat
  `
            }
        )
    }
})
    .then((result) => {
            if (result.isConfirmed) {
                c1 = game_with[1]
                c2 = game_with[0]
                player_1.sample_card = c1
                player_2.sample_card = c2
            } else if (
                c1 = game_with[0],
                    c2 = game_with[1],
                    player_1.sample_card = c1,
                    player_2.sample_card = c2,
                result.dismiss === Swal.DismissReason.cancel
            ) {

            }

        }
    )
debugger


let ctn = 1
let get_status = []

function FnClick(id) {
    debugger
    let value = document.getElementById(id).innerHTML
    ctn += 1
    if (ctn % 2 === 0 && value != player_2.sample_card) {
        document.getElementById(id).innerHTML = player_1.sample_card
        document.getElementById(id).style.color = "red"
    } else if (value != player_1.sample_card) {
        document.getElementById(id).innerHTML = player_2.sample_card
        document.getElementById(id).style.color = "blue"
    }

    get_status.push(id + document.getElementById(id).innerHTML)
    console.log('this is get_id', get_status)
    for (let i = 0; i < 7; i++) {
        if (document.getElementById(id).innerHTML === 'x' || document.getElementById(id).innerHTML === 'o') {

        }
    }
}

debugger
const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function winCondition() {
    for (const [num1, num2, num3] of winningConditions) {
        let a = document.getElementById(num1).innerHTML
        let b = document.getElementById(num2).innerHTML
        let c = document.getElementById(num3).innerHTML
        if (a === b && b === c && a && b && c) {
            Swal.fire({
                    title: `you win`,
                    width: 600,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#0bff2c',
                    cancelButtonText: 'NEXT ROUND',
                    confirmButtonText: 'RESTART',
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
    rgba(0,0,123,0.4)
    no-repeat
  `
                    ,
                    didClose() {

                    }
                }
            ).then((result) => {
                debugger

                let td
                if(a===player_1.sample_card){
                    player_1.score++
                }else if (a===player_2.sample_card){
                    player_2.score++
                }

                if (result.isConfirmed) {
                    location.reload();

                } else if (
                    show_status_player(),
                    td = document.querySelectorAll('table td'),
                        get_status=[],
                        td[0].innerHTML = '',
                        td[1].innerHTML = '',
                        td[2].innerHTML = '',
                        td[3].innerHTML = '',
                        td[4].innerHTML = '',
                        td[5].innerHTML = '',
                        td[6].innerHTML = '',
                        td[7].innerHTML = '',
                        td[8].innerHTML = '',
                        td[9].innerHTML = '',
                    result.dismiss === Swal.DismissReason.cancel
                ) {

                }

            })
            let td = document.querySelectorAll('table tr td')
        } else if(!get_status.includes('')&& get_status.length>=9) {
            // for(let i in td)

                    Swal.fire({
                        title: `draw`,
                        width: 600,
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#0bff2c',
                        cancelButtonText: 'NEXT ROUND',
                        confirmButtonText: 'RESTART',
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
    rgba(0,0,123,0.4)
    no-repeat
  `
                        ,
                        didClose() {

                        }
                    }).then((result) => {
                        debugger

                        let td


                        if (result.isConfirmed) {
                            location.reload();

                        } else if (
                            show_status_player(),
                                td = document.querySelectorAll('table td'),
                                get_status=[],
                                td[0].innerHTML = '',
                                td[1].innerHTML = '',
                                td[2].innerHTML = '',
                                td[3].innerHTML = '',
                                td[4].innerHTML = '',
                                td[5].innerHTML = '',
                                td[6].innerHTML = '',
                                td[7].innerHTML = '',
                                td[8].innerHTML = '',
                                td[9].innerHTML = '',
                            result.dismiss === Swal.DismissReason.cancel
                        ) {

                        }

                    })
                }



    }

}

debugger
let td = document.querySelectorAll('table tr')
for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', winCondition)
    td[i].addEventListener('click', show_status_player)
}
//نمایش اطلاعات کاربر
function show_status_player (){
document.getElementById('player_1').innerHTML=`player_1 <br> <span class="card_play">card  play is ${player_1.sample_card}</span>  <br>   
 <span class="score">Score = ${player_1.score}</span> 
`
document.getElementById('player_2').innerHTML=`player_2 <br><span class="card_play"> card play is ${player_2.sample_card}</span> <br>
<span class="score">Score = ${player_2.score}</span> 
`
}

