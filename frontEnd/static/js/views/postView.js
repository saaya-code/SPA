import abstractView from "./abstractView.js";
export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("PostView");
    }
    async getHtml(){
        return `
        <h1><b><i>These are posts for user with id  : ${this.params.id}</b></i></h1>
        <br>
        <p>Will be Added soon</p>
        `
    }
}