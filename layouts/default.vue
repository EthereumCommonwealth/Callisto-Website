<template>
  <div>
    <section class="hero is-main-hero">
      <div class="hero-head">
        <b-navbar class="container">
          <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                src="~/assets/callisto_logo.svg"
                alt="Callisto Logo"
                height="250"
                style="max-height: 2.5rem"
              >
            </b-navbar-item>
          </template>
          <template #end>
            <b-navbar-dropdown label="Use Callisto" class="navbar-link-color">
              <b-navbar-item href="#">
                Wallets
              </b-navbar-item>
              <b-navbar-item href="#">
                Exchanges
              </b-navbar-item>
              <b-navbar-item href="#">
                Explorer
              </b-navbar-item>
              <b-navbar-item href="#">
                Applications
              </b-navbar-item>
            </b-navbar-dropdown>

            <b-navbar-dropdown label="Learn" class="navbar-link-color">
              <b-navbar-item href="#">
                How to buy CLO
              </b-navbar-item>
              <b-navbar-item href="#">
                How to transfer
              </b-navbar-item>
              <b-navbar-item href="#">
                How to
              </b-navbar-item>
              <b-navbar-item href="#">
                How to
              </b-navbar-item>
            </b-navbar-dropdown>

            <b-navbar-dropdown label="Enterprise" class="navbar-link-color">
              <b-navbar-item href="#">
                About
              </b-navbar-item>
              <b-navbar-item href="#">
                Contact
              </b-navbar-item>
            </b-navbar-dropdown>
          </template>
        </b-navbar>
      </div>

      <div class="hero-body container">
        <div class="columns">
          <div class="column left is-5-desktop" style="padding-top: 2rem">
            <h1 class="title is-size-2-mobile is-1 is-spaced has-text-white">
              Blockchain-as-a-Service for Enterprise!
            </h1>
            <h2 class="subtitle is-5 has-text-white">
              Callisto is an enterprise-oriented project with Defi, Cold Staking, and Security features.
            </h2>

            <h2 class="subtitle is-5 has-text-white">
              Whatever your size and sector of activity, you can now outsource the entire blockchain technical process and focus on your core expertise.
            </h2>

            <div class="buttons">
              <a class="ls-button button has-text-weight-bold is-fullwidth">Get Started</a>
            </div>

            <div class="news-banner has-text-white">
              <span class="tag is-size-6-mobile is-size-7">News</span>
              <span class="is-size-6-mobile is-size-7">Discover how Callisto and Callisto Enterprise is about to change the daily life of millions of users.</span>
            </div>
          </div>

          <div class="column right is-5-desktop is-offset-1-desktop">
            <img class="ls-main-hero--image" src="~/assets/hero-image.svg" width="100%" alt="Layout">
          </div>
        </div>
      </div>
    </section>

    <nuxt />

    <footer class="footer">
      <div class="container">
        <div class="columns has-text-centered-mobile">
          <div class="column is-4">
            <img
              class="ls-space"
              src="https://explorer.callisto.network/images/callisto_logo.svg?v=1"
              title="Callsito Logo"
              width="197"
              height="45"
            >
            <p class="has-text-grey" style="padding: 1em">
              Callisto is an enterprise-oriented project with Defi, Cold Staking, and Security features.
            </p>
          </div>
          <div class="column is-2">
            <h5 class="title has-text-dark is-5">
              Cryptocurrency
            </h5>
            <ul>
              <li><a href="/">Wallets</a></li>
              <li><a href="/">Mining</a></li>
              <li><a href="/">Exchanges</a></li>
              <li><a href="/">Partners</a></li>
              <li><a href="/">Community</a></li>
            </ul>
          </div>
          <div class="column is-2">
            <h5 class="title has-text-dark is-5">
              Resources
            </h5>
            <ul>
              <li><a href="/">Security Audits</a></li>
              <li><a href="/">Deploy Smart Contracts</a></li>
              <li><a href="/">Migrate Smart Contracts</a></li>
              <li><a href="/">Tools</a></li>
              <li><a href="/">Stats</a></li>
              <li><a href="/">Explorer</a></li>
            </ul>
          </div>
          <div class="column is-2">
            <h5 class="title has-text-dark is-5">
              Project
            </h5>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Terms &amp; Conditions</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Press</a></li>
            </ul>
          </div>
        </div>
        <div class="columns ls-footer">
          <div class="column is-12">
            <ul class="columns ls-bottom-links is-mobile is-multiline is-marginless">
              <li class="ls-bottom-link">
                <a href="/">Privacy Policy</a>
              </li>
              <li class="ls-bottom-link">
                <a href="/">Telegram</a>
              </li>
              <li class="ls-bottom-link">
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style>
.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.is-main-hero {
  padding-top: 1rem;
  position: relative;
  overflow: hidden;
}

.is-main-hero:before {
  position: absolute;
  transform: skewY(-5deg);
  bottom: 7vw;
  right: 0;
  width: 100%;
  height: 100%;
  content: '';
  background: linear-gradient(to right, #34c88a 20%, #00CA55) #5FB784;
}

.news-banner {
  background: rgba(0,0,0,0.1);
  padding: .3125rem;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.news-banner .tag {
  border-radius: 20px;
  padding: .3125rem .625rem;
  font-size: .75rem;
  text-transform: uppercase;
  margin-right: .625rem;
  display: inline-block;
  line-height: initial;
}

.ls-footer .ls-bottom-links {
  justify-content: flex-start;
  align-items: center;
}

.ls-footer .ls-bottom-link {
  padding: 0 1rem;
}
</style>
