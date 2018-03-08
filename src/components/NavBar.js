import React, {Component} from 'react';


class NavBar extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  <a class="navbar-brand" href="#">Dinder <small> Making friends with folks that love the same breeds as you!</small></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="email" placeholder="Email"/>
      <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>
  </div>
</nav>
    )
  }
}

export default NavBar
