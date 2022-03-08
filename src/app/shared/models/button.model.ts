export class Button {
    name: string;
    type: string;
    value: string;

    constructor(name: string, type: string, value: string) {
        this.name = name;
        this.type = 'btn-' + type;
        this.value = value;
    }
}