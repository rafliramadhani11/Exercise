function bintang(row){
    i = ""

    while (row >= 0) {
        col = row

        while (col > 0){
            i += "*"
            col -= 1
        }

        i += "\n"
        row -= 1
    }
    console.log(i)
}

bintang(6)