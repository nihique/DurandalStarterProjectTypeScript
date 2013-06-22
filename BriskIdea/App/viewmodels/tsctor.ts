export class Welcome {
    displayName: string;
    description: string;
    random: number;
    features: Array<string>;

    constructor () {
        this.displayName = 'Welcome';
        this.description = 'Description';
        this.random = Math.round(Math.random() * 100)
        this.features = ['feature1', 'feature2'];
        debugger;
    }

    public viewAttached(view) {
    }
}

return Welcome;