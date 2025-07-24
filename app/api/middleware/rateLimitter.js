import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  standardHeaders: true,
  legacyHeaders: false,
  max: 100,
  message: {
    error: "Too many requests, please try again later."
  },
  skipSuccessfulRequests: true,
    skip: (req, res) => {
        return req.method === "POST" && req.path === "/api/specific-endpoint";
    }
});


export default limiter;