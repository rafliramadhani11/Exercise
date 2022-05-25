function segitiga1(x){
    i = ""
    row = 1

    console.log("\n")

    while (row <=x ){
        col = row

        while (col > 1){
            i += "  "
            col -= 1
        }

        kiri = 0
        while(kiri <=(x - row)){
            i += "*"
            kiri += 1
        }

        kanan = kiri
        while(kanan > 1){
            i += "*"
            kanan -= 1
        }

        i += "\n\n"
        row += 1
    }
    console.log(i)
}

segitiga1(6)