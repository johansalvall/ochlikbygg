import { Box, Typography, TextField } from "@mui/material";

/**
 * CaptchaField component - Math-based CAPTCHA for form validation
 * @param {Object} props - Component props
 * @param {Object} props.captchaQuestion - Object with num1, num2, answer
 * @param {string} props.captchaInput - Current input value
 * @param {boolean} props.captchaError - Whether there's an error
 * @param {Function} props.onChange - Handler for input change
 */
const CaptchaField = ({
  captchaQuestion,
  captchaInput,
  captchaError,
  onChange,
}) => {
  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2 },
        bgcolor: "rgba(61, 90, 128, 0.05)",
        border: "1px solid",
        borderColor: captchaError ? "error.main" : "primary.light",
        transition: "border-color 0.3s",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          mb: { xs: 1, sm: 1.5 },
          textAlign: "center",
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
          fontWeight: 600,
        }}
      >
        Säkerhetsverifiering: Lös följande uppgift
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1, sm: 1.5 },
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
          }}
        >
          {captchaQuestion.num1} + {captchaQuestion.num2} =
        </Typography>
        <TextField
          required
          type="number"
          value={captchaInput}
          onChange={onChange}
          placeholder="?"
          error={captchaError}
          sx={{
            width: { xs: "70px", sm: "80px" },
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              fontWeight: 600,
              textAlign: "center",
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                borderWidth: "2px",
              },
            },
            "& input": {
              textAlign: "center",
              padding: { xs: "6px", sm: "8px" },
            },
          }}
        />
      </Box>
      {captchaError && (
        <Typography
          variant="body2"
          sx={{
            color: "error.main",
            fontWeight: 600,
            textAlign: "center",
            mt: 1,
            fontSize: "0.85rem",
          }}
        >
          Fel svar. Försök igen!
        </Typography>
      )}
    </Box>
  );
};

export default CaptchaField;
