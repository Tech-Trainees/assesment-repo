import React from "react";
import { Themecontext,themes } from "./theme-context";
import ThemeToggleContextBtn from "./ThemeTogglerbtn";

class ContextThemeApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme: state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      };
  
      // State also contains the updater function so it will
      // be passed down into the context provider
      this.state = {
        theme: themes.light,
        toggleTheme: this.toggleTheme,
      };
    }
  
    render() {
      // The entire state is passed to the provider
      return (
        <Themecontext.Provider value={this.state}>
          <Content />
        </Themecontext.Provider>
      );
    }
  }
  
  function Content() {
    return (
      <div align='center'>
        <ThemeToggleContextBtn />
      </div>
    );
  }

  export default ContextThemeApp