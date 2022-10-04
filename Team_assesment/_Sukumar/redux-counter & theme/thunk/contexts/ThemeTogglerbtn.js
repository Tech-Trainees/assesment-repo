import { Themecontext } from "./theme-context";

function ThemeToggleContextBtn(){
    return(
        <Themecontext.Consumer>
            {({theme,toggleTheme}) => ( /* destructing the parameters */
                <button 
                onClick={toggleTheme}
                style={{backgroundColor: theme.background}}
                >
                    Toggle Me
                </button>
            )}
        </Themecontext.Consumer>
    )
}
export default ThemeToggleContextBtn