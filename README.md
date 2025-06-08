Here’s a complete `README.md` for **JWT (JSON Web Token)** explaining everything from the basics to implementation in a Node.js + Express backend. It’s well-structured for a GitHub project:

---

```markdown
# 🔐 JSON Web Token (JWT) Authentication Guide

This guide explains what JWT is, how it works, and how to use it in a Node.js + Express server for authentication.

---

## 📘 What is JWT?

**JWT (JSON Web Token)** is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. It's commonly used for authentication and information exchange.

---

## ⚙️ How JWT Works

1. **User logs in with credentials**
2. **Server verifies credentials and generates a JWT**
3. **JWT is sent to the client**
4. **Client stores the JWT (usually in localStorage or cookies)**
5. **For each request, client sends the JWT in the Authorization header**
6. **Server verifies the JWT and grants/denies access**

---

## 🔐 JWT Structure

A JWT consists of three parts, separated by dots (`.`):

```

<Header>.<Payload>.<Signature>
```

### 1. Header

Specifies algorithm and token type:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 2. Payload

Contains claims like user info:

```json
{
  "userId": 123,
  "name": "John Doe",
  "exp": 1712345678
}
```

### 3. Signature

A hashed combination of header, payload, and secret:

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

---

## 🚀 Installation (Node.js + Express)

```bash
npm install jsonwebtoken bcryptjs express
```

---

## 🛠️ Implementation

### 🔑 Generate JWT (Login)

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { id: user._id, name: user.name }, // Payload
  "your_jwt_secret",                // Secret key
  { expiresIn: "1h" }               // Optional: Expiry time
);
```

### ✅ Verify JWT (Middleware)

```js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Access Denied" });

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified;
    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid Token" });
  }
}
```

### 🔐 Protected Route Example

```js
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ msg: `Welcome ${req.user.name}` });
});
```

---

## 📦 Sample Folder Structure

```
jwt-auth-app/
├── controllers/
│   └── authController.js
├── middleware/
│   └── auth.js
├── models/
│   └── user.js
├── routes/
│   └── auth.js
├── server.js
└── package.json
```

---

## 🧠 Best Practices

* Use **HTTPS** to prevent token leakage.
* Keep your **secret key safe**.
* Set reasonable **expiration** (`exp`) times.
* Use **refresh tokens** for long sessions.
* Store JWT in **httpOnly cookies** for better security (avoid localStorage for sensitive tokens).

---

## 📚 Useful Resources

* [JWT.io Debugger](https://jwt.io/)
* [RFC 7519 - JWT Spec](https://tools.ietf.org/html/rfc7519)
* [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)

---

## 🧪 Quick Testing

Send your JWT in request headers:

```
Authorization: Bearer <your_token>
```

---

## 📝 Example `.env` File

```
PORT=3000
JWT_SECRET=your_jwt_secret
```

---

## 👋 Final Note

JWT provides **stateless, scalable** authentication. It’s perfect for REST APIs and SPAs (React, Angular, etc.). Just be mindful of where and how you store the token!

```

---

Let me know if you want a live demo app link or full project code with signup/login/logout routes and refresh tokens support!
```
