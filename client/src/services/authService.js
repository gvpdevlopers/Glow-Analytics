import API from "./api";



// =========================================
// LOGIN USER
// =========================================
export const loginUser =
  async (data) => {

    const response =
      await API.post(
        "/auth/login",
        data
      );





    // SAVE TOKEN
    if (
      response.data.token
    ) {

      localStorage.setItem(
        "token",
        response.data.token
      );





      localStorage.setItem(
        "user",

        JSON.stringify(
          response.data.user
        )
      );
    }






    return response.data;
  };








// =========================================
// LOGOUT USER
// =========================================
export const logoutUser =
  () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );
  };