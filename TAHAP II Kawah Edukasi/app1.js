function bintang1(x){
    i = ""
    row = 1

    while (row <= x){
        col = row

        while (col > 0){
            i = i + "*"
            col -= 1
        }

        i += "\n"
        row +=1
    }
    console.log(i)
}

bintang1(5)