const LoginUser = (user) => {
  return fetch(`${process.env.BACKEND_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

const RegisterUser = (user) => {
  return fetch(`${process.env.BACKEND_URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application / json",
    },
    body: JSON.stringify(user),
  });
};

export { LoginUser, RegisterUser };
