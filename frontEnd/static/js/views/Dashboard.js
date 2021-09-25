import abstractView from "./abstractView.js";
export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }
    async getHtml(){
        return `
        <link rel="shortcut icon" href="" type="image/x-icon">  

        <h1>Welcome to your dashboard</h1>
        <br>
        <p> <b> More Details to be added soon.</b> </p>
        <br>

        <p> You can view your other posts here </p>
        <p><a href="/posts" data-link>View posts here</a></p>
        `
    }
}