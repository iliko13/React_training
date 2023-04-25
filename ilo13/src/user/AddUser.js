import React from "react";

class AddUser extends React.Component {
  userAdd = {};

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Name"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Surname"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          placeholder="Bio"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <input
          placeholder="Age"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Happy?</label>
        {/* აქ htmlfor-ს იმიტომ ვწერთ რომ ის ქვედას მივაკუთვნოთ */}
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            };

            if (this.props.user) {
              this.userAdd.id = this.props.user.id;
            }
            this.props.onAdd(this.userAdd);
          }}
        >
          Add
        </button>
        {/* აქ button-ს type = button იმიტომ მივუწერეთ, რომ sub-ის დროს
        დაარეფრეშებდა გვერდს */}
      </form>
    );
  }
}

export default AddUser;
