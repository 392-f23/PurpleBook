import { useState, useEffect, useRef } from "react";
import { signInWithApple, signInWithGitHub, signInWithGoogle, useAuthState, firebaseSignOut } from "../../utilities/firebaseUtils";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./PurpleBookLogin.less";

const PurpleBookLogin = ({setIsUserLoggedIn}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const typingRef = useRef();

  useEffect(() => {
    const text = typingRef.current;
    const words = [
      "Basketball",
      "Tennis",
      "Volleyball",
      "Badminton",
      "Golf",
      "Baseball",
      "Football",
      "Racquetball",
    ];

    const initializeTypingEffect = (element, wordsArray) => {
      const LETTER_TYPE_DELAY = 75;
      const WORD_STAY_DELAY = 2000;

      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      let direction = DIRECTION_FORWARDS;
      let wordIndex = 0;
      let letterIndex = 0;
      let typingInterval;

      const startTyping = () => {
        typingInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      };

      const typeLetter = () => {
        const currentWord = wordsArray[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
          letterIndex++;

          if (letterIndex === currentWord.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(typingInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction === DIRECTION_BACKWARDS) {
          letterIndex--;

          if (letterIndex === 0) {
            moveToNextWord();
          }
        }

        const textToType = currentWord.substring(0, letterIndex);
        element.textContent = textToType;
      };

      const moveToNextWord = () => {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex === wordsArray.length) {
          wordIndex = 0;
        }
      };

      startTyping();
    };

    initializeTypingEffect(text, words);
  }, []);

  const [user] = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsUserLoggedIn(true)
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="login-screen">
      <section className="fuzzy-glass-container">
        {/* multilingual */}
        <div className="login-multilingual-container">
          <Accordion disableGutters className="login-multilingual-accrodin">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>English</Typography>
            </AccordionSummary>
            <AccordionDetails className="login-multilingual-accrodin-content">
              <Button
                className="login-multilingual-accrodin-button"
                disableRipple
              >
                English
                <span className={`active`}>X</span>
              </Button>
              <Button
                className="login-multilingual-accrodin-button"
                disableRipple
              >
                Chinese
                <span className={``}></span>
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* icon */}
        <div className="login-app-icon-container">
          <img
            className="login-app-icon"
            src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgicon.svg"
            alt="NU"
          />
        </div>
        {/* header text */}
        <div className="login-header-container">
          <section className="login-header-text-container">
            <p className="login-header-text purple">Purple</p>
            <p className="login-header-text">Book</p>{" "}
            <span className="typing-text" ref={typingRef}></span>
            <p className="login-header-text">Court</p>
          </section>
        </div>
        {/* login in */}
        <div className="login-container">
          {/* email */}
          <FormControl className="login-email-input-container">
            <OutlinedInput
              className="login-email-input"
              type={"text"}
              placeholder={"Enter Email"}
              sx={{
                "& fieldset": { border: "none" },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <AccountCircleIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {/* password */}
          <FormControl className="login-password-input-container">
            <OutlinedInput
              className="login-password-input"
              type={showPassword ? "text" : "password"}
              placeholder={"Enter Password"}
              sx={{
                "& fieldset": { border: "none" },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {/* forget password */}
          <div className="login-forget-password-container">
            <Button variant="text" className="login-forget-password-button">
              Recover Password
            </Button>
          </div>
          {/* sign in button */}
          <Button variant="contained" className="login-sign-in-button">
            Sign In
          </Button>
          {/* continue with */}
          <span className="login-continue-with-text">Or continue with</span>
          {/* other sign in methods */}
          <div className="login-other-sign-in-container">
            <Button
              variant="contained"
              className="login-google-sign-in-button"
              onClick={signInWithGoogle}
            >
              <img
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgGoogle.svg"
                className="login-google-icon"
              ></img>
            </Button>
            <Button variant="contained" className="login-apple-sign-in-button" onClick={signInWithApple}>
              <img
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgApple.svg"
                className="login-apple-icon" 
              ></img>
            </Button>
            <Button variant="contained" className="login-github-sign-in-button" onClick={signInWithGitHub}>
              <img
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgGithub.svg"
                className="login-github-icon"
              ></img>
            </Button>
          </div>
        </div>

        <div className="login-bottom-container">
          <span className="login-bottom-upper-text">
            If you don't have an account
          </span>
          <span className="login-bottom-lower-text">
            you can{" "}
            <Button className="login-register-button" disableRipple>
              Register here!
            </Button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default PurpleBookLogin;