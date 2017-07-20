
export class AuthInfo {

    constructor(public $uid:string) {
    }

    loggedIn() {
      return !!this.$uid;
    }

}
