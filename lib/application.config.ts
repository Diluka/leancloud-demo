export class ApplicationConfig {
    constructor() {
        global["appConfig"] = this;
    }

    test = "ok";
}
