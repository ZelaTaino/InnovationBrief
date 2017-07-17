
export class AuthInfo {

    // update this variable when admin user is changed
    private adminId:string = 'eCGCxLFGILgD2wB699dRHfZNDy93';
    
    constructor(public $uid:string, public $email:string) {
    }

    getUserId() {
      return this.$uid;
    }

    getEmail() {
      return this.$email;
    }

    getAdminId() {
      return this.adminId;
    }

    isAdmin() {
      if (this.$uid == this.adminId) {
          return true;
      } else {
          return false;
      } 
    }

    loggedIn() {
      return !!this.$uid;
    }

}
