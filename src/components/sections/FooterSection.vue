<template>
  <div
    class="w-screen mx-auto px-4 md:mt-24 mt-1 bg-gray-100 opacity-80"
    id="footerSection"
  >
    <div class="container mx-auto">
      <div class="flex flex-col justify-between md:flex-row py-16 gap-10">
        <div class="logo-column flex flex-col gap-4 md:w-1/5">
          <div class="logo-column-top flex items-center gap-4">
            <img class="w-16" src="/src/assets/images/logo.png" alt="" />
            <div class="zinafri flex flex-col text-primary">
              <p class="text-lg font-bold tracking-wide">Zinafri</p>

              <p class="text-xs font-medium">Immigration Consulting</p>
            </div>
          </div>
          <div class="logo-column-text">
            <p class="text-secondary-200">
              At Zinafri, we make your business in Nigeria a very seamless one
              that makes it easy to create a new business in the country.
            </p>
          </div>
        </div>

        <div class="contact-column flex flex-col gap-4 md:w-1/5">
          <div class="contact-column-top flex items-center gap-4">
            <p class="font-bold text-lg text-secondary-200">Contact Details</p>
          </div>
          <div class="contact-column-address">
            <p class="text-secondary-200">
              Lekki-Ajah Expressway, Lagos, Nigeria
            </p>
          </div>
          <div class="contact-column-email">
            <p class="text-secondary-200">Phone: +234 703 8230 351</p>
            <p class="text-secondary-200">
              Email: <span>immanuel@zinafri.com</span>
            </p>
          </div>
          <div class="contact-column-workdays">
            <p class="text-secondary-200">
              Mon-Fri: 9:00AM – 6:30PM Saturday: 8:30AM – 3:30PM Sunday: Closed
            </p>
          </div>
        </div>

        <div class="links-column flex flex-col gap-4 md:w-1/5">
          <div class="links-column-top flex items-center gap-4">
            <p class="font-bold text-lg text-secondary-200">Useful Links</p>
          </div>
          <div class="link-list">
            <ul class="flex flex-col gap-2 text-secondary-200">
              <li>
                <a href="">About Zinafri</a>
              </li>
              <li>
                <a href="">Visa Information</a>
              </li>
              <li>
                <a href="">Immigration FAQ</a>
              </li>
              <li>
                <a href="">Immigration Assistance </a>
              </li>
              <li>
                <a href="">Zinafri Testimonials</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="visa-column flex flex-col gap-4 md:w-1/5 text-secondary-200"
        >
          <div class="links-column-top flex items-center gap-4">
            <p class="font-bold text-lg text-secondary-200">Visas</p>
          </div>
          <div class="link-list">
            <ul class="flex flex-col gap-2">
              <li>
                <a href="">Visitor Visas </a>
              </li>
              <li>
                <a href="">Permanent Residence Visas</a>
              </li>
              <li>
                <a href="">Business Visa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div class="footer-brand my-8 text-center">
        <p class="text-secondary-200 text-xs">
          © Copyright <span class="font-medium">NikolasDevs 2024.</span> All
          Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>
