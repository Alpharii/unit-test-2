//nama, tanggal lahir, status (precourse), batch(32), grade

let nama = 'Bintang'
let tanggalLahir = "21-11-2006"
let status = "precourse"
let batch = 32
let grade = 2

function peserta (hapus){
    let result = {
        nama: nama,
        tanggalLahir: tanggalLahir,
        status: status,
        batch: batch,
        grade: grade
    }

    if(hapus === 'nama'){
        delete result.nama
    } if(hapus === 'tanggalLahir'){
        delete result.tanggalLahir
    } if(hapus === 'status'){
        delete result.status
    }if(hapus === 'batch'){
        delete result.batch
    }if(hapus === 'grade'){
       delete result.grade
    }

    return result
}


console.log(peserta('nama'))