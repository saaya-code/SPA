import abstractView from "./abstractView.js";
export default class extends abstractView{
    constructor(params) {
        super(params);
        this.setTitle("ToDO list");
    }
    async getHtml(){
        return `
        <h1>This is your ToDo list</h1>
        <br>
        `
    }
}