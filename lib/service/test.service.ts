import {Service, Inject} from "typedi";
import {ApplicationConfig} from "../application.config";

@Service()
export class TestService {

    @Inject() private appConfig: ApplicationConfig;

    getTestString() {
        return this.appConfig.test;
    }
}
