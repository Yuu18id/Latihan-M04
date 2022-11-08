class Data {
    constructor() {
        this.getDataList();
    }
    getDataList() {
        this.data = 'https://picsum.photos/v2/list?page=1&limit=1';
    }
    async getProfile() {
        let response = await fetch(this.data);
        if (!response.ok) {
            throw new Error ('HTTP error! status: '+response.status);
        }
        return await response.json();
    }
    showProfile(obj) {
        let data_div = document.getElementById('data');
        let data_author = document.getElementById('author');
        obj.forEach((result) => {
            data_author.innerHTML = result.author
            data_div.innerHTML = 
                data_div.innerHTML + 
                '<img src='+result.download_url+' height=200></td><td>';
        });
    }
    back(){
        data_div.innerHTML = 
        data_div.innerHTML + 
        '<img src='+result.download_url+' height=200></td><td>';
    }
}

export default Data;