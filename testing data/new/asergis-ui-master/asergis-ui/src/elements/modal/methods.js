import { store } from "../../lib";

const toggleModal = (name, show) => {
  store.modals[name].show = show;
};

export default {
  toggleModal
}