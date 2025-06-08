const jwt=require("jsonwebtoken");

//decode,verify,generate(sign)
//svd

const value={
  name:"aryaman",
  accountNumber:123456787
}
//jwt
const token=jwt.sign(value,"secret")
console.log(token); 
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJ5YW1hbiIsImFjY291bnROdW1iZXIiOjEyMzQ1Njc4NywiaWF0IjoxNzQ5Mzg3Nzc3fQ.ZqAFanhFy-4AEtZdSePgtVbRc3XoQgQGc1PQMpD3Nlo

//this token has been generated using this secret and this token can be verified using this secret.
const verifiedVal=jwt.verify(token,"secret")
console.log(verifiedVal)
