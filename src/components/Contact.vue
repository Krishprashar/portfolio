<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
        >
          contact.
        </span>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="text-center">
        <div
          class="mb-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="text"
            name="user_name"
            v-model="name"
            placeholder="name"
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="email"
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.4s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <textarea
            name="message"
            v-model="text"
            placeholder="message"
            class="pinput"
            rows="4"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <button
          @click.prevent="sendDiscordMessage"
          class="mt-1 btn mb-3"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          Send
        </button>
      </div>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import Snackbar from "./helpers/Snackbar";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    async sendDiscordMessage() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please fill all the fields";
        this.snackbarColor = "rgb(212, 149, 97)";
        return;
      }

      const webhookURL = process.env.VUE_APP_DISCORD_WEBHOOK_URL;

      if (!webhookURL) {
        console.error("🚨 Missing webhook URL from env vars");
        this.showSnackbar = true;
        this.snackbarMessage = "Server misconfiguration.";
        this.snackbarColor = "red";
        return;
      }

      const payload = {
        embeds: [
          {
            title: "📬 New Contact Message",
            color: 0x0099ff,
            fields: [
              { name: "Name", value: this.name, inline: false },
              { name: "Email", value: this.email, inline: false },
              { name: "Message", value: this.text, inline: false },
            ],
            timestamp: new Date(),
          },
        ],
      };

      try {
        const res = await fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          this.showSnackbar = true;
          this.snackbarMessage = "Thanks! Message sent via Discord.";
          this.snackbarColor = "#1aa260";
          this.email = "";
          this.name = "";
          this.text = "";
        } else {
          throw new Error("Discord webhook failed.");
        }
      } catch (err) {
        this.showSnackbar = true;
        this.snackbarMessage = "Oops! Something went wrong.";
        this.snackbarColor = "rgb(212, 149, 97)";
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}
.title2 {
  font-size: 20px;
  font-weight: 400;
}
.title3 {
  font-size: 16px;
  font-weight: 400;
}
.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
}
.btn {
  border-color: #669db3ff;
  color: #669db3ff;
  width: 50%;
}
.btn:hover,
.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}
.pgray-dark {
  background-color: #3c4148 !important;
}
@media screen and (max-width: 1000px) {
  .pinput,
  .btn {
    width: 90%;
  }
}
</style>
