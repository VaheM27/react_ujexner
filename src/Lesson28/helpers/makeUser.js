import { nanoid } from "nanoid";

export const makeUser = (state) => {
  const user_image = state[3].files[0]
    ? URL.createObjectURL(state[3].files[0])
    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc0%2F27%2Fbe%2Fc027bec07c2dc08b9df60921dfd539bd.jpg&f=1&nofb=1&ipt=fb77e11be5158b03c32f2cfe643882d7708bf9f1885a40490eccae4743863553&ipo=images";

  return {
    id: nanoid(8),
    name: state[0].value,
    srName: state[1].value,
    age: state[2].value,
    photo: user_image,
  };
};
