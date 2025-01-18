import { nanoid } from "nanoid";

export const createUser = (state) => {
  const image = state.target[3].files[0]
    ? URL.createObjectURL(state.target[3].files[0])
    : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png";
  return {
    id: nanoid(8),
    name: state.target[0].value,
    srName: state.target[1].value,
    age: state.target[2].value,
    photo: image,
  };
};
