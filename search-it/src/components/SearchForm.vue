<template>

<div>
  
<!--  Language selector -->
  <select @change="changeLanguage($event)">
    <option value="en">English</option>
    <option value="pt">Português</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
    <option value="jp">日本語</option>
  </select>

<!-- Operating System -->
  <nav>
    <p class="OS" v-html="$t('userOS', { os: $t('os', { os: userOS}) })"></p>
    <a href="https://github.com/VerbalThree" style="padding: 5px; font-size: 12px;">2024 VerbalThree</a>
  </nav>

<!-- Dark Mode control -->
  <div class="{ 'dark-mode': isDarkMode }">
    <button @click="toggleDarkMode">{{  isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
  </div>

<!-- Search Form --> 
    <form action="/search" autocomplete="off" method="GET" role="search">
        <div class="user">
            <div class="search-container">
                <i class="fas fa-search"></i>
                <textarea id="search-bar" :placeholder="$t('search')" rows="1" @input="autoResize"></textarea>
            </div>
            <button type="submit" id="search-button">{{ $t('searchButton') }}</button>
        </div>
    </form>

</div>

</template>

<script>

export default {
  data() {
    return {
      userOS: this.detectOS() // Detect the Operating System
    };
  },

  methods: {
      // AutoResize
    autoResize(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    },
    changeLanguage(event) {
      this.$i18n.locale = event.target.value; // Changing the language
    },
    detectOS() {
        const userAgent = window.navigator.userAgent;
        let os = "Unknown OS";
        let version = "Unknown Version";
        let architecture = "Unknown Archtecture";

        // Windows
        if (userAgent.indexOf("Win") !== -1) {

          os = "Windows";
          if (userAgent.indexOf("Windows NT 10.0") !== -1) version = "10";
          else if (userAgent.indexOf("Windows NT 6.3") !== -1) version = "8.1";
          else if (userAgent.indexOf("Windows NT 6.2") !== -1) version = "8";
          else if (userAgent.indexOf("Windows NT 6.1") !== -1) version = "7";
          else if (userAgent.indexOf("Windows NT 6.0") !== -1) version = "Vista";
          else if (userAgent.indexOf("Windows NT 5.1") !== -1) version = "XP";
          architecture = userAgent.indexOf("WOW64") !== -1 ? "64 bits" : "32 bits";
        }

        // Mac
        else if (userAgent.indexOf("Mac") !== -1) {
          os = "macOS";
          const match = userAgent.match(/Mac OS X (\d+[\._]\d+)/); // eslint-disable-line no-useless-escape
          if (match) {
            version = match[1];
          }
        }

        // Linux
        else if (userAgent.indexOf("Linux") !== -1) {
          os = "Linux";
        }

        // Android
        else if (userAgent.indexOf("Android") !== -1){
          os = "Android";
          const match = userAgent.match(/Android (\d+\.\d+)/);
          if (match) {
            version = match[1];
          }
        }

        // iOS
        else if (userAgent.indexOf("like Mac") !== -1){
          os = "iOS";
          const match = userAgent.match(/OS (\d+[\._]\d+)/); // eslint-disable-line no-useless-escape
          if (match) {
            version = match[1].replace(/_/g, '.');
          }
        }

        return `${os} ${version} ${architecture}`;
    }
  }
};

</script>

<style scoped>

body, html {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: arial;
}

.user {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Container for textarea and icon */
.search-container {
    position: relative;
    max-width: 584px;
    width: 100%;
    border-radius: 24px;
    margin-top: 20%;
}

/* Shadow when the user mouse hover the search bar */
.search-container:hover {
    box-shadow: 0 4px 8px rgba(1.5, 1.5, 1.5, 1.5);
    transition: box-shadow 0.3s ease;
}

/* Animation when the mouse is not on the search bar */
.search-container:not(:hover){
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);   
    transition: box-shadow 0.3s ease; 
}

/* Text Area */
#search-bar {
    padding-left: 40px;
    margin: auto;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    width: 100%;
    min-height: 44px;
    max-width: 584px;
    width: 540px;
    resize: none;
    line-height: 44px;
    font-size: 16px;
    overflow-y: auto;
}

/* Icon inside the Search Bar */
.search-container i {
    position: absolute;
    pointer-events: none; /* Doesn't interfere with the UX */
    top: 48%;
    font-size: 18px;
    transform: translateY(-50%);
    left: 15px;
}

/* Button for search */
#search-button {
    margin-top: 20px;
    border-radius: 16px;
    background-color: white;
    padding: 8px 8px 8px 8px;
    font-size: 20px;
    border: solid 2px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  #search-button:hover {
    background-color: black;
    color: white;
  }

/* Removing the highlight for textarea */
textarea {
  outline: none;
}

/* Language Selector */
select {
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 8px;
  font-size: 14px;
  margin: 0 auto;
  display: block;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

/* Operating System paragraph */
.OS {
  padding: 5px;
  font-size: 12px;
}

/* navbar */
nav {
  justify-content: space-between;
  padding: 1em;
  font-weight: 500;
  top: 0px;
  display: flex;
  width: 98%;
  position: fixed;
}

/* Links for the Github profile */
a {
  text-decoration: none;
  color: black;
  border: 10px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s;
}

a:hover {
  background-color: #dfd4d4;
}

/* Styling for darkmode */
.dark-mode{
  background-color: #121212;
  color: white;
}

.dark-mode nav {
  background-color: #1e1e1e;
}

.dark-mode a {
  color: white;
}

.dark-mode #search-button {
  background-color: #333;
  border-color: #444;
}

.dark-mode #search-button:hover {
  background-color: #555;
}
</style>