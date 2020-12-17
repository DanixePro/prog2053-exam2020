import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render()
  {
      if(this.user.uname)
      {
          return html`

            <form id="form" onsubmit="return false">
            <fieldset>
            <legend>${this.user.uname}, uid: ${this.user.uid}</legend>

            Username:<br><input type="text" name="Username" value=""><br>
            Password:<br><input type="text" name="Password" value=""><br>
            First name:<br><input type="text" name="First name" value=""><br>
            Last name:<br><input type="text" name="Last name" value=""><br><br>
            <button @click="${this.updateUser}">Submit</button>

            </fieldset>
            </form>
          `;

      }
  }

  updateUser()
  {
      fetch('api/updateUser.php', {
          method: 'POST',
          uname: this.user.uname,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          password: this.user.pwd
      }).then(response => {
          console.log(response);
      }).catch(error => console.log(error));

      // $.post("conn.php", { project : project },function(response){
      //        console.log(response);
      // });
  }

}
customElements.define('edit-user', EditUser);
