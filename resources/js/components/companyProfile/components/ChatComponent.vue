<template>
  <div class="chat-container">
    <div class="whatsapp-icon" :class="{ active: showChatBox }" @click="toggleChatBox">
      <i class="fab fa-whatsapp"></i>
      <span class="konsultasi">Konsultasi Via Whatsapp</span>
    </div>

    <div v-if="showChatBox" class="customText fw-bold">Hai, ada yang bisa dibantu?</div>
    <div v-if="showChatBox" class="chat-box">
      <a href="https://bit.ly/lumiraCS">
        <div class="chatme">
          <div class="row">
            <!-- <div class="col-sm-1"></div> -->
            <div class="col-4">
              <img src="/images/wa.png" alt="wa">
            </div>
            <div class="col-8">
              <span class="chat">Chat Me</span><br>
              <span class="admin">Admin Lumira</span>
            </div>
          </div>
        </div>
      </a>
      
      
      
      <!-- <div class="row">
        <div class="col-8">
          <input v-model="message" type="text" placeholder="Type your message">
        </div>
        <div class="col-4">
          <button @click="sendMessage" class="float-end">
            <img src="/images/send.png" alt="">
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showChatBox: false,
      message: "",
      phoneNumber: "6281331928838"
    };
  },
  methods: {
    toggleChatBox() {
      this.showChatBox = !this.showChatBox;
      if (!this.showChatBox) {
        this.message = "";
      }
    },
    sendMessage() {
      const encodedMessage = encodeURIComponent(this.message);
      const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      this.message = "";
    }
  }
};
</script>

<style scoped>
.chatme{
  border-radius: 5px;
}
.chatme:hover{
  background-color: #eeeeee;
}
span.chat{
  font-size: 11px;
  line-height: 100%;
  opacity: .5;
}

span.admin{
  font-weight: 700;
  color: black;
}
.customText {
  background-color: #2b77eb;
  border-radius: 5px 5px 0 0;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  position: absolute;
  bottom: 118px;
  left: 0;
  width: 100%;
  color: #ffffff;
}

.chat-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
}

.whatsapp-icon {
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 230px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  padding-left: 10px;
  padding-right: 10px;
}

.whatsapp-icon.active {
  background-color: #dc3545;
}

.whatsapp-icon i {
  margin-right: 5px;
}

.chat-box {
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
}

.chat-box input {
  width: 100%;
  border: none;
  outline: none;
  padding: 5px;
  margin-bottom: 5px;
}

.chat-box button {
  width: 100%;
}

span.konsultasi {
  font-size: 15px;
}
</style>
