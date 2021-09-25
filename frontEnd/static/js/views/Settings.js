import abstractView from "./abstractView.js";
export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }
    async getHtml(){
        return `
        <h1>These are your Settings</h1>
        <br>
        <p>Settings to be added later on</p>
        `
    }
}