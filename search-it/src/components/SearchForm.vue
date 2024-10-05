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
    methods: {

      // AutoResize
        autoResize(event) {
            event.target.style.height = "auto";
            event.target.style.height = `${event.target.scrollHeight}px`;
        },
        changeLanguage(event) {
          this.$i18n.locale = event.target.value; // Changing the language
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
</style>