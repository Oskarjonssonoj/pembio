import { createApp } from 'vue'
import App from './App.vue'

// Global and Component-styles
import "../src/assets/styles/main.scss";
import "../src/assets/styles/WeeklyContentItem.scss";
import "../src/assets/styles/MenuList.scss";
import "../src/assets/styles/WeekList.scss";
import "../src/assets/styles/WeeklyTasks.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faCaretDown, faHeart, faLocationPinLock, faStar, faStarAndCrescent, faStarHalfStroke, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCaretRight, faCaretDown, faHeart, faLocationPinLock, faStar, faStarAndCrescent, faStarHalfStroke, faArrowRight);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
