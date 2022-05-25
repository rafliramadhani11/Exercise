function segitiga(x){
    i = " "
    row = x

    // LOOPING BARIS
    while (row >= 0){   
        
        // LOOPING KOLOM SPASI KOSONG
        col = row
        while(col > 0){
            i += "   "
            col -= 1
        }

        // LOOPING KOLOM BINTANG SISI KIRI
        kiri = 1
        while (kiri < (x -(row - 1))){
            i += " * "
            kiri += 1
        }

        // LOOPING KOLOM BINTANG SISI KANAN
        kanan = 1
        while(kanan < (kiri - 1)){
            i += " * "
            kanan += 1
        }

        i += "\n"
        row -= 1
    }
    console.log(i)
}

segitiga(5)