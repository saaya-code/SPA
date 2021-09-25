import abstractView from "./abstractView.js";
export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }
    async getHtml(){
        return `
        <h1>These are your posts</h1>
        <br>
        <p>Will be Added soon</p>
        `
    }
}