// Defined the type to store entries in navbar

export class Feature {
    icon: string;
    dispName: string;
    routePath: string;

    constructor (icon: string, dispName: string, routePath: string) {
        this.icon = icon;
        this.dispName = dispName;
        this.routePath = routePath;
    }
}