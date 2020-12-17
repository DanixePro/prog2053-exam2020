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

            Username:<br><input type="text" name="uname" value=""><br>
            Password:<br><input type="text" name="pwd" value=""><br>
            First name:<br><input type="text" name="firstName" value=""><br>
            Last name:<br><input type="text" name="lastName" value=""><br><br>
            <button @click="${this.updateUser}">Submit</button>

            </fieldset>
            </form>
          `;

      }
  }

  updateUser()
  {
      let form = this.shadowRoot.getElementById('form');

      let formData = new FormData();
      formData.append('uname', this.user.uname);
      formData.append('pwd', this.user.pwd);

      formData.append('firstName', form.firstName.value);
      formData.append('lastName', form.lastName.value);
      formData.append('uid', this.user.uid);

      fetch('api/updateUser.php', {
          method: 'POST',
          body: formData
      }).then(response => {
          return response.text();
      }).then(body => {
          console.log(body);
      }).catch(error => console.log(error));

      // $.post("conn.php", { project : project },function(response){
      //        console.log(response);
      // });
  }

}
customElements.define('edit-user', EditUser);
