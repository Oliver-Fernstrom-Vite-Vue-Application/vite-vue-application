<!-- Bootstrap Contact form, with custom styles -->
<template>
  <div class="container mt-4">
    <h1 class="text-center">Contact</h1>
    <form class="row justify-content-center">
      <div class="col-md-6 mt-4">
        <div class="form-group custom-text">
          <label for="inputName4">Name</label>
          <input
            type="text"
            class="form-control custom-placeholder"
            id="inputName4"
            placeholder="Your name"
          />
        </div>

        <div class="form-group mt-2 custom-text">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control mt-2 custom-placeholder"
            id="inputEmail4"
            placeholder="joedoe@mail.com"
          />
        </div>

        <div class="form-group mt-2 custom-text">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control mt-2 custom-placeholder"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div class="form-group mt-2 custom-text">
          <label for="inputAddress2">Phone number (optional)</label>
          <input
            type="text"
            class="form-control mt-2 custom-placeholder"
            id="inputAddress2"
            placeholder="+46 76-000 00 00"
          />
        </div>

        <div class="form-group mt-2 custom-text">
          <label for="exampleFormControlTextarea1">Your message</label>
          <textarea
            class="form-control mt-2"
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>

        <button type="submit" class="btn mt-4 custom-btn">Send</button>
      </div>
    </form>
  </div>
</template>

<script></script>

<style scope>
.custom-text {
  color: var(--text-color);
  font-size: 1.2rem;
}

.container {
  background-color: var(--bg-color-form);
}
.text-center {
  color: var(--accent-color);
}
.custom-btn {
  background-color: var(--bg-text-hov);
  color: var(--text-color);
  font-weight: bold;
  margin: 15px;
}
.custom-btn:hover {
  background-color: var(--accent-color);
  color: var(-- --text-color-dark);
}
.custom-placeholder {
  background-color: var(--bg-color-form);
}
.custom-placeholder::placeholder {
  color: var(--text-color-form);
  font-size: 1.1rem;
  font-weight: 400;
  font-style: italic;
  opacity: 0.8;
}
.custom-placeholder:focus {
  background-color: var(--bg-color-form) !important;
  color: var(--text-color);
  outline: none;
  box-shadow: none;
}

#exampleFormControlTextarea1 {
  background-color: var(--bg-color-form);
  color: var(--text-color);
}
</style>
