import React, { createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContext extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return;
    <ThemeContext.Provider value={{ ...this.state }}></ThemeContext.Provider>;
  }
}
