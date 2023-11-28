import axios from "axios"


const options = {
    // istek ile göndermemiz gereken kimliğimiz
    params: {
        //buralarda nav.geoloc vs gibi fonksiyonlarla kullanıcının konumuna erişilir ve ona göre veri sunulur
        geo: "TR",
        lang: "tr"
    },
    headers: {
// apiden istek hakkının dolduğuna dair uyarı aldıysan(429) yeni gmail ile gelen key ile aşağıdaki keyi değiştir
        'X-RapidAPI-Key': 'e9c16c084emshd6bbf6324cb96b6p1cb160jsn86b2c4eb08e7',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

// axios'un özelliklerinden birini kullanarak bütün isteklerde ortak olan baseUrl'nin tanımlanması  

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// bunu yaptıktan sonra artık base urlyi yazmamıza gerek kalmıyo path'i yani /home yazsak yetiyo

// api'ye verdiğimiz endpoint için istek atıp verileri döndüren bir fonk yazalım

export const getData = async (path) => {
    try {
        return await axios.get(path, options);
    } catch (err) { console.log("verileri çekerken hata oluştu ") }

}


