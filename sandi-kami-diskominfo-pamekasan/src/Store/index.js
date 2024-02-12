const { atom } = require("recoil");

const authenticatedUser = atom({
  key: "authenticated",
  default: {
    check: false,
  },
});

export { authenticatedUser };
