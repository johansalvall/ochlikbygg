import { useState, useEffect } from "react";

/**
 * Custom hook for managing CAPTCHA state
 * Generates simple math questions for form validation
 * @returns {Object} CAPTCHA state and handlers
 */
export function useCaptcha() {
  const [captchaQuestion, setCaptchaQuestion] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    const answer = num1 + num2;
    setCaptchaQuestion({ num1, num2, answer });
    setCaptchaInput("");
    setCaptchaError(false);
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setCaptchaError(false);
  };

  const validateCaptcha = () => {
    const isValid = parseInt(captchaInput) === captchaQuestion.answer;
    if (!isValid) {
      setCaptchaError(true);
    }
    return isValid;
  };

  const resetCaptcha = () => {
    generateCaptcha();
  };

  // Generate initial captcha
  useEffect(() => {
    generateCaptcha();
  }, []);

  return {
    captchaQuestion,
    captchaInput,
    captchaError,
    handleCaptchaChange,
    validateCaptcha,
    resetCaptcha,
    generateCaptcha,
  };
}
