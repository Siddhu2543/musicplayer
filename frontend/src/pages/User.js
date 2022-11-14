const User = ({ user }) => {
  return (
    <div className="home">
      <div className="main">
        <h3 className="heading">Account Details</h3>
        <div className="container-fluid container-scroll user-dets">
          <div class="row">
            <label for="name" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="name"
                value={user.name}
              />
            </div>
          </div>
          <div class="row">
            <label for="username" class="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="username"
                value={user.userName}
              />
            </div>
          </div>
          <div class="row">
            <label for="email" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="email"
                value={user.email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
