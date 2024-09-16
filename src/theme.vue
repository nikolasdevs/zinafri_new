import { reactive } from 'vue'; export const themeState = reactive({ isDarkMode:
false, toggleTheme() { this.isDarkMode = !this.isDarkMode; } });
