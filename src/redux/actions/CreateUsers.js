export default function setUser(user) {
    return {
      type: "CREATE_USER",
      payload: user
    }
  }