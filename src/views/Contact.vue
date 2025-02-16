<template>
  <div class="container mt-4">
    <h1 class="text-center">Contact</h1>
    <form class="row justify-content-center">
      <div class="col-md-6 mt-4">
        <div class="form-group">
          <label for="inputName4">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName4"
            placeholder="Your name"
          />
        </div>

        <div class="form-group mt-2">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control mt-2"
            id="inputEmail4"
            placeholder="joedoe@mail.com"
          />
        </div>

        <div class="form-group mt-2">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control mt-2"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div class="form-group mt-2">
          <label for="inputAddress2">Phone number (optional)</label>
          <input
            type="text"
            class="form-control mt-2"
            id="inputAddress2"
            placeholder="+46 76-000 00 00"
          />
        </div>

        <div class="form-group mt-2">
          <label for="exampleFormControlTextarea1">Your message</label>
          <textarea
            class="form-control mt-2"
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-dark mt-4">Sign in</button>
      </div>
    </form>
  </div>
</template>
<script></script>
<style scope>
.container {
  background-color: rgba(49, 49, 49, 0.474);
}
.text-center {
  color: #28f897e3;
}
</style>
