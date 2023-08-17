import { useState, useEffect } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faSwatchbook, faXmark } from '@fortawesome/free-solid-svg-icons';

// Custom hooks
import useLocalStorage from '../../hooks/useLocalStorage';

// Styles
import styles from './themeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [hue, setHue] = useLocalStorage('portfolio.color', '240')

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('portfolio.theme', defaultDark ? "dark" : "light")

  const [isColorPicking, setIsColorPicking] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--_hue', hue);
  }, [hue])

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? 'hsl(var(--muted) / .6)'
          : 'transparent'
      }}
    >
      {
        isColorPicking
          ? (
            <>
              <button
                className={`${styles.btn} ${styles.close}`}
                aria-label="Close color picking mode"
                onClick={() => setIsColorPicking(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <input
                className={styles.picker}
                type="range"
                min="0"
                max="360"
                aria-label='Change color theme slider'
                value={hue}
                onInput={(e) => setHue(e.target.value)}
              />
            </>
          )
          : (
            <div className={styles.btns}>
              <button
                className={styles.btn}
                aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
                aria-checked={theme === "dark" ? "true" : "false"}
                role="switch"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}

              </button>
              <button
                className={styles.btn}
                aria-label='Enable color picking mode'
                onClick={() => setIsColorPicking(true)}
              >
                <FontAwesomeIcon icon={faSwatchbook} />
              </button>
            </div>
          )
      }
    </aside >
  )
}
export default ThemeSwitcher;